from sqlalchemy.orm import Session
from models import Book, Review, User
from schemas import BookCreate
import datetime

def create_book(db: Session, book: BookCreate, user_id: int):
    title = book.title
    if not (len(title) >= 4 and title[:4].isdigit() and int(title[:4]) >= 1900):
        raise ValueError("Invalid title format: must start with a year (1900-)")
    db_book = Book(**book.dict(), user_id=user_id, date_added=datetime.date.today())
    db.add(db_book)
    db.commit()
    db.refresh(db_book)
    return db_book

def get_books(db: Session):
    # Update books with missing date_added
    db.query(Book).filter(Book.date_added.is_(None)).update(
        {Book.date_added: datetime.date.today()},
        synchronize_session=False
    )
    db.commit()
    return db.query(Book).all()

def get_book_by_id(db: Session, book_id: int):
    return db.query(Book).filter(Book.book_id == book_id).first()

def update_book(db: Session, book_id: int, book_update: dict, user_id: int):
    db_book = get_book_by_id(db, book_id)
    if not db_book:
        raise ValueError("Book not found")
    if db_book.user_id != user_id:
        raise ValueError("Not authorized to update this book")
    for key, value in book_update.items():
        setattr(db_book, key, value)
    db.commit()
    db.refresh(db_book)
    return db_book

def delete_book(db: Session, book_id: int, user_id: int):
    db_book = get_book_by_id(db, book_id)
    if not db_book:
        return False
    if db_book.user_id != user_id:
        raise ValueError("Not authorized to delete this book")
    db.delete(db_book)
    db.commit()
    return True

def create_review(db: Session, review: dict, user_id: int, book_id: int):
    db_book = db.query(Book).filter(Book.book_id == book_id).first()
    if not db_book:
        raise ValueError("Book not found")
    if db_book.user_id == user_id:
        raise ValueError("Not authorized to review your own book")
    existing = db.query(Review).filter(
        Review.user_id == user_id,
        Review.book_id == book_id
    ).first()
    if existing:
        raise ValueError("You have already reviewed this book")
    db_review = Review(**review, user_id=user_id, book_id=book_id)
    db.add(db_review)
    db.commit()
    db.refresh(db_review)
    return db_review

def get_reviews_for_book(db: Session, book_id: int):
    return db.query(Review).filter(Review.book_id == book_id).all()

def delete_review(db: Session, review_id: int, user_id: int):
    db_review = db.query(Review).filter(Review.review_id == review_id).first()
    if not db_review:
        return False
    if db_review.user_id != user_id:
        raise ValueError("Not authorized to delete this review")
    db.delete(db_review)
    db.commit()
    return True

def get_all_users(db: Session):
    return db.query(User).all()

def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.user_id == user_id).first()
    if not db_user:
        return False

    # Get all book IDs owned by the user
    book_ids = db.query(Book.book_id).filter(Book.user_id == user_id).subquery()

    # Delete all reviews that reference these books
    db.query(Review).filter(Review.book_id.in_(book_ids)).delete()

    # Delete all books by the user
    db.query(Book).filter(Book.user_id == user_id).delete()

    # Delete the user
    db.delete(db_user)
    db.commit()
    return True
