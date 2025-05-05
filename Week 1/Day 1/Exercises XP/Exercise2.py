
humanYears = 0;
while humanYears <1 :
    humanYears = int(input("entre a number : "))

humanYear = 2
catYears = 15
dogYears = 15

while humanYear <= humanYears :

    if(humanYear == 2) :
        catYears += 9
        dogYears += 9
    if(humanYear > 2) :
        catYears += 4
        dogYears += 5
    humanYear += 1
    
print(f"humanYears :  {humanYears,catYears,dogYears}")
