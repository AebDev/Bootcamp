import random
class Game:
    def __init__(self):
        self.items = ["r", "p", "s"]
        
    
    def get_user_item(self):
        is_valid = False
        while not is_valid:
            user_input = input("Select (r)ock, (p)aper, (s)cissors): ").lower()
            if user_input in self.items:
                is_valid = True
                return user_input
            else:
                print("Invalid choice. Please try again.")
        
    
    def get_computer_item(self):
        return random.choice(self.items)

        
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "r" and computer_item == "s") or \
             (user_item == "p" and computer_item == "r") or \
             (user_item == "s" and computer_item == "p"):
            return "win"
        else:
            return "lose"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You chose : {user_item}. The computer chose : {computer_item}. Result : {result}.")
        return result



