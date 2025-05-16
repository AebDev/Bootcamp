from fastapi import FastAPI
from routers import users
import uvicorn
from database import get_db_connection
import logging


app = FastAPI(title = "Users CRUD API")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(users.router)


@app.on_event("startup")
async def startup_db_client():
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'users')")
                table_exists = cur.fetchone()[0]
                if not table_exists:
                    cur.execute("""
                        create table users (
                            id serial primary key,
                            username varchar(100) unique not null,
                            first_name varchar(50),
                            last_name varchar(50),
                            email varchar(150) unique not null,
                            password varchar(255)
                        )
                    """)
                    conn.commit()
                    logger.info("Table 'users' created successfully")
                else:
                    logger.info("Table 'users' already exists")
    except Exception as e:
        logger.error(f"Error connecting to database: {e}")


@app.get("/")
def read_root():
    return {"message": "Welcome to Users CRUD API"}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
