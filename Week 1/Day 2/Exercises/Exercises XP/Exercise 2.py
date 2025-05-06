def ticket_price(age):
    if age < 3:
        return 0
    elif age < 12:
        return 10
    else:
        return 15  
  
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

family = dict()
while True:
    name = input("Enter family member's name (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

ticketPrice = list(map(ticket_price, family.values()))
print("The family’s total cost for the movies : ",sum(ticketPrice))