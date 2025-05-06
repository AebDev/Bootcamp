import random

def get_random_temp(season):
    
    if season == "winter":
        return round(random.uniform(-10, 16), 2)
    elif season == "spring":
        return round(random.uniform(5, 20), 2) 
    elif season == "summer":
        return round(random.uniform(20, 35), 2)
    elif season == "autumn":
        return round(random.uniform(15, 40), 2)


def main():

    season = {12: "winter", 1: "winter", 2: "winter",
              3: "spring", 4: "spring", 5: "spring",
              6: "summer", 7: "summer", 8: "summer",
              9: "autumn", 10: "autumn", 11: "autumn"}
    number_of_month = int(input("Enter the number of months: "))
    print("it's : ", season[number_of_month])
    celsius_temp = get_random_temp(season[number_of_month])
    print(f"The temperature right now is {celsius_temp} degrees Celsius.")
    if  celsius_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif celsius_temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif celsius_temp <= 23:
        print("It's cool! A light jacket should be enough.")
    elif celsius_temp <= 32:
        print("It's warm! A nice day for a walk!")
    elif celsius_temp <= 40:
        print("It's hot! Stay hydrated!")
    

main()