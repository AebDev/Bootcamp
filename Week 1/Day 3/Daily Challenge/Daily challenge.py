class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}
        # ... code to initialize name and animals attributes ...

    def add_animal(self, animal_type, count=1):
        if animal_type not in self.animals:
            self.animals[animal_type] = count
        else:
            self.animals[animal_type] += count
        # ... code to add or update animal count in animals dictionary ...

    def get_info(self):
        farm_info = f"{self.name}'s farm\n\n"
        farm_info += "\n".join([f"{animal} : {count}" for animal, count in self.animals.items()])
        farm_info += "\n\nE-I-E-I-0!"
        return farm_info
        # ... code to format animal info from animals dictionary ...


# Test the code 
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
#output:
# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!