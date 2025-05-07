class Cat:

    print(f"Cat class created")
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
def find_oldest_cat():

    cat1 = Cat(str(input("entre cat name : ")), int(input("entre cat age : ")))
    cat2 = cat1 = Cat(str(input("entre cat name : ")), int(input("entre cat age : ")))
    cat3 = cat1 = Cat(str(input("entre cat name : ")), int(input("entre cat age : ")))

    catName = cat1.name
    catAge = cat1.age
    if cat2.age > catAge:
        catName = cat2.name
        catAge = cat2.age
    elif cat3.age > catAge:
        catName = cat3.name
        catAge = cat3.age

    return catName, catAge

name, age = find_oldest_cat()

print(f"The oldest cat is {name}, and is {age} years old.")




# kety = Cat("Kety", 2)
# milo = Cat("Milo", 3)
# bella = Cat("Bella", 1)