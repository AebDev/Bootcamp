def initialize_board():
    return [[" " for _ in range(3)] for _ in range(3)]

def display_board(board):
    print("\nTic Tac Toe")
    print("-----------")
    for row in board:
        print("| " + " | ".join(row) + " |")
        print("-----------")

def get_player_move(player, board):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (1-3): ")) - 1
            col = int(input(f"Player {player}, enter column (1-3): ")) - 1
            if 0 <= row < 3 and 0 <= col < 3:
                if board[row][col] == " ":
                    return row, col
                else:
                    print("Cell already taken. Try again.")
            else:
                print("Input must be between 1 and 3. Try again.")
        except ValueError:
            print("Invalid input. Please enter numbers only.")

def check_win(board, player):
    # Check rows
    for row in board:
        if all(cell == player for cell in row):
            return True
    # Check columns
    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            return True
    # Check diagonals
    if all(board[i][i] == player for i in range(3)) or \
       all(board[i][2 - i] == player for i in range(3)):
        return True
    return False

def check_draw(board):
    return all(cell != " " for row in board for cell in row)

def play_game():
    board = initialize_board()
    players = ["X", "O"]
    scores = {"X": 0, "O": 0}
    current_player = 0

    while True:
        display_board(board)
        row, col = get_player_move(players[current_player], board)
        board[row][col] = players[current_player]

        if check_win(board, players[current_player]):
            display_board(board)
            print(f"Player {players[current_player]} wins!")
            scores[players[current_player]] += 1
            break
        elif check_draw(board):
            display_board(board)
            print("It's a draw!")
            break

        current_player = 1 - current_player

    print(f"Scores - X: {scores['X']} | O: {scores['O']}")
    if input("Play again? (y/n): ").lower() == "y":
        play_game()

if __name__ == "__main__":
    print("Welcome to Tic Tac Toe!")
    play_game()
