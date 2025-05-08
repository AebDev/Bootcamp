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
