board = [[], [], []]
board[0] = [" ", " ", " "]
board[1] = [" ", " ", " "]
board[2] = [" ", " ", " "]

def player_input():
    
    while True:
        try:
            row = int(input("Enter row : "))
            col = int(input("Enter column : "))
            row -= 1
            col -= 1
            if row < 0 or row > 2 or col < 0 or col > 2:
                print("Invalid input. Please enter numbers between 1 and 3.")
            else:
                if board[row][col] != " ":
                    print("This cell is already taken. Please choose another one.")
                else:   
                    return row, col
                    break
        except ValueError:
            print("Invalid input. Please enter numbers.")

        

def display_board():
    print("Tic Tac Toe")
    print("*" * 15)
    print(f"*  {board[0][0]} | {board[0][1]} | {board[0][2]}  *")
    print(f"* {"-"*3}|{"-"*3}|{"-"*3} *")
    print(f"*  {board[1][0]} | {board[1][1]} | {board[1][2]}  *")
    print(f"* {"-"*3}|{"-"*3}|{"-"*3} *")
    print(f"*  {board[2][0]} | {board[2][1]} | {board[2][2]}  *")
    print("*" * 15)

def check_win():
    if " " not in board[0] and " " not in board[1] and " " not in board[2]:
        print("\nIt's a draw!\n")
        return True
    elif board[0][0] == board[0][1] == board[0][2] == "X" or board[1][0] == board[1][1] == board[1][2] == "X" or board[2][0] == board[2][1] == board[2][2] == "X" or board[0][0] == board[1][0] == board[2][0] == "X" or board[0][1] == board[1][1] == board[2][1] == "X" or board[0][2] == board[1][2] == board[2][2] == "X" or board[0][0] == board[1][1] == board[2][2] == "X" or board[0][2] == board[1][1] == board[2][0] == "X":
        print("\nPlayer X wins!\n")
        return True
    elif board[0][0] == board[0][1] == board[0][2] == "O" or board[1][0] == board[1][1] == board[1][2] == "O" or board[2][0] == board[2][1] == board[2][2] == "O" or board[0][0] == board[1][0] == board[2][0] == "O" or board[0][1] == board[1][1] == board[2][1] == "O" or board[0][2] == board[1][2] == board[2][2] == "O" or board[0][0] == board[1][1] == board[2][2] == "O" or board[0][2] == board[1][1] == board[2][0] == "O":
        print("\nPlayer O wins!\n")
        return True

        
def play():
    print("Welcome to Tic Tac Toe!")
    display_board()
    player = True
    while True:
        print(f"\n\nPlayer ","X" if player else "O","'s turn....\n")
        row, col = player_input()
        board[row][col] = "X" if player else "O"
        display_board()
        player = not player
        if check_win():
            break
    




play()


