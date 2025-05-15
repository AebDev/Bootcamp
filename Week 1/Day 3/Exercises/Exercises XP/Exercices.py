#Exercise 1: Cats
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

#Exercise 2 : Dogs

class Dog :
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")
    

davids_dog = Dog("Bob", 50)
sarahs_dog = Dog("Lucy", 20)

print(f"Hello, my name is {davids_dog.name} and I am {davids_dog.height} cm tall.")
print(f"Hello, my name is {sarahs_dog.name} and I am {sarahs_dog.height} cm tall.")

davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
else:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")

#Exercise 3 : Who’s the song producer?

class Song:
    def __init__(self, lyrics = []):
        
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


#Exercise 4 : Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name, animals=[]):
        self.zoo_name = zoo_name
        self.animals = animals
        
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        return self.animals

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    
    def sort_animals(self):
        self.animals.sort()
        dict = {}
        for animal in self.animals:
            if animal[0] not in dict:
                dict[animal[0]] = [animal]
            else:
                dict[animal[0]].append(animal)
        return dict
    
    def get_groups(self):
        for key in self.sort_animals():
            print(f"{key}: {self.sort_animals()[key]}")
        

# Step 2: Create a Zoo instance
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Use the Zoo methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
