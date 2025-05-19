from fastapi import FastAPI, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from database import engine, SessionLocal
from dependencies import get_db
from models import User, Book, Review
from schemas import (
    BookCreate, BookResponse, ReviewCreate,
    ReviewResponse, UserCreate, UserResponse, Token
)
from auth import get_current_user, create_access_token, authenticate_user
from crud import (
    create_book, get_books, get_book_by_id,
    update_book as crud_update_book, delete_book,
    create_review, get_reviews_for_book,
    delete_review, get_all_users, delete_user
)
from middleware import admin_required
import uvicorn
from fastapi.security import OAuth2PasswordRequestForm
import auth

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(
        (User.username == user.username) | (User.email == user.email)
    ).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already taken")
    hashed_pw = auth.get_password_hash(user.password)
    new_user = User(**user.dict(exclude={"password"}), password=hashed_pw)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created", "user": new_user}


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/books", response_model=BookResponse)
def add_book(book: BookCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        return create_book(db, book, current_user.user_id)
    except ValueError as e:
        if "Not authorized" in str(e):
            raise HTTPException(status_code=403, detail=str(e))
        else:
            raise HTTPException(status_code=400, detail=str(e))


@app.get("/books", response_model=list[BookResponse])
def list_books(db: Session = Depends(get_db)):
    return get_books(db)


@app.put("/books/{book_id}", response_model=BookResponse)
def update_book(book_id: int, book: BookCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        updated = crud_update_book(db, book_id, book, current_user.user_id)
        if not updated:
            raise HTTPException(status_code=404, detail="Book not found")
        return updated
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.delete("/books/{book_id}")
def remove_book(book_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        success = delete_book(db, book_id, current_user.user_id)
        if not success:
            raise HTTPException(status_code=404, detail="Book not found")
        return {"message": "Book deleted"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/books/{book_id}/review", response_model=ReviewResponse)
def add_review(book_id: int, review: ReviewCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        return create_review(db, review, current_user.user_id, book_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/books/{book_id}/reviews", response_model=list[ReviewResponse])
def list_reviews(book_id: int, db: Session = Depends(get_db)):
    return get_reviews_for_book(db, book_id)


@app.delete("/reviews/{review_id}")
def remove_review(review_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    try:
        success = delete_review(db, review_id, current_user.user_id)
        if not success:
            raise HTTPException(status_code=404, detail="Review not found")
        return {"message": "Review deleted"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/users", response_model=list[UserResponse], dependencies=[Depends(admin_required)])
def list_users(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_all_users(db)


@app.delete("/users/{user_id}", dependencies=[Depends(admin_required)])
def remove_user(user_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    success = delete_user(db, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted"}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)

