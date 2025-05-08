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