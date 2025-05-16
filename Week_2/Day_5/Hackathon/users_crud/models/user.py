from pydantic import BaseModel, EmailStr, validator
from typing import Optional



class UserBase(BaseModel):
    username: str
    first_name: str
    last_name: str
    email: str
    password: Optional[str] = None

    @validator('password')
    def password_strength(cls, v):
        if v is not None and len(v) < 8:
            raise ValueError('Password must be at least 8 characters')
        return v



class UserCreate(UserBase):
    password: str  # Required for creation

class UserUpdate(UserBase):
    username: Optional[str] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None

    @validator('password')
    def password_strength(cls, v):
        if v is not None and len(v) < 8:
            raise ValueError('Password must be at least 8 characters')
        return v

class User(UserBase):
    id: int
