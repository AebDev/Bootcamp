from pydantic import BaseModel
from typing import Optional, List
from datetime import date
from fastapi.security import OAuth2PasswordRequestForm

class UserBase(BaseModel):
    username: str
    full_name: str
    email: str

class BookBase(BaseModel):
    title: str
    description: str

class ReviewBase(BaseModel):
    rating: int
    comment: str

# Requests
class UserCreate(UserBase):
    password: str

class BookCreate(BookBase):
    pass

class ReviewCreate(ReviewBase):
    pass

# Responses
class UserResponse(UserBase):
    user_id: int
    is_admin: bool

    class Config:
        from_attributes = True

class BookResponse(BookBase):
    book_id: int
    date_added: date
    owner: UserResponse

    class Config:
        from_attributes = True

class ReviewResponse(ReviewBase):
    review_id: int
    date_added: date
    date_modified: date
    author: UserResponse

    class Config:
        from_attributes = True

# Auth
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
