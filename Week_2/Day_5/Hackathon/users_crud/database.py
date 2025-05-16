import psycopg2
from dotenv import load_dotenv
from fastapi import HTTPException
from contextlib import contextmanager
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()


config = {
    "host": os.getenv("DB_HOST"),
    "port": os.getenv("DB_PORT"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "dbname": os.getenv("DB_NAME"),
}

@contextmanager
def get_db_connection():
    
    conn = None
    try:
        conn = psycopg2.connect(**dict(config))
        logger.info("Database connection :",config)
        yield conn
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection error: {str(e)}")
    
    finally:
        if conn is not None:
            conn.close()
