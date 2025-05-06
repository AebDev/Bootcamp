import random
def compare_random_numbers(num1):

    num2 = random.randint(1, 100)

    if num1 == num2:
        print(f"success!! {num1} and {num2} are the same")
    else:
        print(f"fail!! {num1} and {num2} are different")

compare_random_numbers(5)