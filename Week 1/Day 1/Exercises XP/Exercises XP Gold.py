#Exercise 1: What is the Season?
month = 0
while month < 1 or month > 12 :
    month = int(input("entre a month (1 to 12) : "))

if month >= 3 and month <=5 :
    print("Spring")
elif month >= 6 and month <= 8 :
    print("Summer")
elif month >= 9 and month <= 11 :
    print("Autumn")
else :
    print("Winter")


#Exercise 2: For Loop
for i in range(1, 21) :
    print(i)

liste = list(range(1, 21))
for i in range(len(liste)) :
    if i % 2 == 0 :
        print(liste[i])

#Exercise 3: While Loop
name = ""
while name != "mouhcine" :
    name = input("guess my name : ")


#Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = str(input("entre your name : "))
for i in range(len(names)) :
    if names[i] == name :
        print("you're index in the list is : ", i) 
        break


#Exercise 5: Greatest Number
list1 = []
list1.append(int(input("Input the 1st number:")))
list1.append(int(input("Input the 2nd number:")))
list1.append(int(input("Input the 3rd number:")))
list1.sort()
print("The greatest number is:", list1[-1])


#Exercise 6: Random number
import random
number = 0
w = 0
l = 0
while True :
    number = int(input("enter a number from 1 to 9 : "))
    if number < 1 or number > 9 :
        continue
    if random.randint(1, 9) == number :
        w += 1
        print("Winner")
    else :  
        l += 1
        print("Better luck next time.")
    if input(f"Your score :\n\t Win : {w} - Loss : {l} \n Do you want to play again ? (y/n) : ") == "n" :
        break
    