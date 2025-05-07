

import datetime
today = str(datetime.date.today()).split("-")
today[0] = int(today[0])
today[1] = int(today[1])
today[2] = int(today[2])


date = input("Enter date (DD/MM/YYYY): ")
birth_date = date.split("/")
birth_date[0] = int(birth_date[0])
birth_date[1] = int(birth_date[1])    
birth_date[2] = int(birth_date[2])

age = today[0] - birth_date[2]

candle =  '_' * 2 + 'i' * (abs(age) % 10) + '_' * 2
happy = "      |:H:a:p:p:y:|"
top_cake_box = "    __|___________|__"
hat = "   |" + "^" * 17 + "|"
bday = "   |:B:i:r:t:h:d:a:y:|"
empty = "   |                 |"
waves = "   ~" + "~" * 17 + "~"

print(f"       _{candle}_")
card = [
        happy,
        top_cake_box,
        hat,
        bday,
        empty,
        waves
    ]

for line in card:
    print(line)





   