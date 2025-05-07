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