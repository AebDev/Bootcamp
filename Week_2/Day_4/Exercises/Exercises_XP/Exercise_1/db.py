import psycopg2

cnx = psycopg2.connect(
        host="localhost",
        database="restaurant",
        user="postgres",
        password="user"
        )

cursor = cnx.cursor()