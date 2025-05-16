from database import get_db_connection
from models.user import User, UserCreate, UserUpdate
import psycopg2
from psycopg2 import sql
from psycopg2.extras import RealDictCursor
from fastapi import HTTPException


def create_user(user: UserCreate):
    try:
        with get_db_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    """
                    INSERT INTO users (username, first_name, last_name, email, password)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id, username, first_name, last_name, email, password
                    """,
                    (user.username, user.first_name, user.last_name, user.email, user.password)
                )
                new_user = cur.fetchone()
                conn.commit()
                return new_user
    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        raise HTTPException(status_code=400, detail="Username or email already exists")
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Error creating user: {str(e)}")


def update_user(user_id: int, user: UserUpdate):
    try:
        with get_db_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                # Build dynamic update query
                fields = []
                values = []
                
                if user.username:
                    fields.append("username = %s")
                    values.append(user.username)
                if user.first_name:
                    fields.append("first_name = %s")
                    values.append(user.first_name)
                if user.last_name:
                    fields.append("last_name = %s")
                    values.append(user.last_name)
                if user.email:
                    fields.append("email = %s")
                    values.append(user.email)
                if user.password:
                    fields.append("password = %s")
                    values.append(user.password)
                
                if not fields:
                    raise HTTPException(status_code=400, detail="No fields to update")
                
                values.append(user_id)
                query = f"""
                    UPDATE users
                    SET {', '.join(fields)}
                    WHERE id = %s
                    RETURNING id, username, first_name, last_name, email, password
                """
                cur.execute(query, values)
                updated_user = cur.fetchone()
                if not updated_user:
                    raise HTTPException(status_code=404, detail="User not found")
                conn.commit()
                return updated_user
    except psycopg2.errors.UniqueViolation:
        conn.rollback()
        raise HTTPException(status_code=400, detail="Username or email already exists")
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Error updating user: {str(e)}")


def delete_user(user_id: int):
    try:
        with get_db_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    """
                    DELETE FROM users
                    WHERE id = %s
                    RETURNING id
                    """,
                    (user_id,)
                )
                deleted = cur.fetchone()
                if not deleted:
                    raise HTTPException(status_code=404, detail="User not found")
                conn.commit()
                return {"message": "User deleted successfully"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Error deleting user: {str(e)}")


def find_user(user_id: int):
    try:
        with get_db_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT * FROM users
                    WHERE id = %s
                    """,
                    (user_id,)
                )
                user = cur.fetchone()
                if not user:
                    raise HTTPException(status_code=404, detail="User not found")
                return user
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving user: {str(e)}")


def all_users(skip: int = 0, limit: int = 100):
    try:
        with get_db_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT * FROM users
                    ORDER BY id
                    LIMIT %s OFFSET %s
                    """,
                    (limit, skip)
                )
                return cur.fetchall()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving users: {str(e)}")
