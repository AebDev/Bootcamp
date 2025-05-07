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
