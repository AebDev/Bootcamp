from sqlalchemy import Column, Integer, String, Text, Date, Boolean, ForeignKey, CheckConstraint, UniqueConstraint
import datetime
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    full_name = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    is_admin = Column(Boolean, default=False)
    books = relationship("Book", back_populates="owner")
    reviews = relationship("Review", back_populates="author")

class Book(Base):
    __tablename__ = "books"
    book_id = Column(Integer, primary_key=True)
    title = Column(String(50), nullable=False)
    description = Column(Text, nullable=False)
    date_added = Column(Date)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    owner = relationship("User", back_populates="books")
    reviews = relationship("Review", back_populates="book")

class Review(Base):
    __tablename__ = "reviews"
    review_id = Column(Integer, primary_key=True)
    rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=False)
    date_added = Column(Date, default=datetime.date.today)
    date_modified = Column(Date, default=datetime.date.today, onupdate=datetime.date.today)
    user_id = Column(Integer, ForeignKey("users.user_id"), index=True)
    book_id = Column(Integer, ForeignKey("books.book_id"), index=True)
    author = relationship("User", back_populates="reviews", cascade="delete")
    book = relationship("Book", back_populates="reviews", cascade="delete")
    
    __table_args__ = (
        CheckConstraint(rating.between(1, 5), name='check_rating_range'),
        UniqueConstraint('user_id', 'book_id', name='uix_user_book'),
    )
