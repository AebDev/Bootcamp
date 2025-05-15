import requests
import random
import psycopg2

url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
items = response.json()

country_codes = [item["cca2"] for item in items]


cnx = psycopg2.connect(
    host="localhost",
    database="restaurant",
    user="postgres",
    password="user"
)

cursor = cnx.cursor()


for i in range(10):
    url = f"https://restcountries.com/v3.1/alpha/{random.choice(country_codes)}"
    response = requests.get(url)
    item = response.json()
    query = "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s);"
    cursor.execute(query, (item[0]["name"]["common"], item[0]["capital"][0], item[0]["flag"], item[0]["subregion"], item[0]["population"]))

print("insert data done")

cnx.commit()

query = "SELECT * FROM countries;"
cursor.execute(query)
items = cursor.fetchall()
print(f"{'Name':<30} | {'Capital':<20} | {'Flag':<6} | {'Subregion':<25} | {'Population':>12}")
print('-' * 100)

for item in items:
    print(f"{item[1]:<30} | {item[2]:<20} | {item[3]:<6} | {item[4]:<25} | {item[5]:>12,}")
cursor.close()
cnx.close()

    
