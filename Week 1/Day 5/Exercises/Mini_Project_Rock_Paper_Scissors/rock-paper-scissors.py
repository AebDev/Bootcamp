from game import Game

def get_user_menu_choice():
    is_valid = False
    while not is_valid:
        choice = input("\tMenu:\n\t(g) Play a new game \n\t(x) Show scores and exit\n\t: ").lower()
        if choice in ["g", "x"]:
            is_valid = True
        else:
            print("Invalid choice. Please try again.")


    
    return choice

def print_results(results):
    print(f"\tGame Results:\n\t You won: {results['win']} times\n\t You lost: {results['loss']} times\n\t You drew: {results['draw']} times\n\n\tThank you for playing!")

def main():
    game = Game()
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        if choice == "g":
            result = game.play()
            if result == "win":
                results["win"] += 1
            elif result == "lose":
                results["loss"] += 1
            else:
                results["draw"] += 1
        else:
            break 

    print_results(results)

main()
