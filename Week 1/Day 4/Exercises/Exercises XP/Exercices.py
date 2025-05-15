#Exercise 1: Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


bengal_obj = Bengal("Bengal", 2)
chartreux_obj = Chartreux("Chartreux", 3)
siamese_obj = Siamese("Siamese", 4)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

sara_pets = Pets(all_cats)
sara_pets.walk()

#Exercise 2: Dogs

class Dog:
    def __init__(self, name, age, weight):
        # ... code to initialize attributes ...
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        # ... code to return bark message ...
        return f"{self.name} is barking!" 


    def run_speed(self):
        # ... code to return run speed ...  
        return self.weight / (self.age * 10)


    def fight(self, other_dog):
        # ... code to determine and return winner ...
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} wins the fight!"
        else:
            return f"{other_dog.name} wins the fight!"


# Step 2: Create dog instances
#... your code here
dog1 = Dog("Bobby", 5, 20)
dog2 = Dog("Max", 3, 25)
dog3 = Dog("rex", 4, 30)
# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

#Exercise 3: Dogs Domesticated

# In a new file
# import the Dog class
from Exercise_2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        # ... code to print play message ...
        print(f"{self.name}, {', '.join(args)} all play together!")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")

# Test PetDog methods
my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()

#Exercise 4: Family and Person Classes

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    
    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False
    
class Family(Person):
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age)
        new_member.last_name = self.last_name
        self.members.append(new_member)
    
    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
    
    def familty_presnetation(self):
        print(f"Family {self.last_name} has the following members:")
        for member in self.members:
            print(f"{member.first_name} , age {member.age}")
    

familty1 = Family("Smith")
familty1.born("John", 30)
familty1.born("Jane", 25)
familty1.born("Tom", 17)
familty1.born("Anna", 15)
familty1.check_majority("John")
familty1.check_majority("Tom")
familty1.familty_presnetation()
