from fastapi import APIRouter, Depends, HTTPException
from database import get_db_connection
from models.user import User, UserCreate, UserBase, UserUpdate
from typing import List
from controllers.userController import create_user, update_user, delete_user, find_user, all_users
import logging




logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/users",
    tags=["users"],
    dependencies=[Depends(get_db_connection)],
)


@router.post("/", response_model=User)
def create_user_route(user: UserCreate):
    try:
        new_user = create_user(user)
        logger.info(f"User created: {user.username}")
        return new_user
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error creating user: {e}")
        raise HTTPException(status_code=500, detail=f"Error creating user: {str(e)}")


@router.put("/{user_id}", response_model=User)
def update_user_route(user_id: int, user: UserUpdate):
    try:
        updated_user = update_user(user_id, user)
        if not updated_user:
            raise HTTPException(status_code=404, detail="User not found")
        logger.info(f"Updated user with ID: {user_id}")
        return updated_user
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error updating user: {e}")
        raise HTTPException(status_code=500, detail=f"Error updating user: {str(e)}")


@router.delete("/{user_id}", response_model=dict)
def delete_user_route(user_id: int):
    try:
        result = delete_user(user_id)
        logger.info(f"Deleted user with ID: {user_id}")
        return {"message": "User deleted successfully"}
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error deleting user: {e}")
        raise HTTPException(status_code=500, detail=f"Error deleting user: {str(e)}")


@router.get("/", response_model=list[User])
def all_users_route(skip: int = 0, limit: int = 100):
    try:
        users = all_users(skip, limit)
        return users
    except Exception as e:
        logger.error(f"Error retrieving users: {e}")
        raise HTTPException(status_code=500, detail=f"Error retrieving users: {str(e)}")



@router.get("/{user_id}", response_model=User)
def find_user_route(user_id: int):
    try:
        user = find_user(user_id)
        logger.info(f"Retrieved user with ID: {user_id}")
        return user
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Error retrieving user: {e}")
        raise HTTPException(status_code=500, detail=f"Error retrieving user: {str(e)}")
