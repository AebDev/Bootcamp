string = str(input("Enter a list of numbers separated by commas: "))
liste = string.split(" ")
print(liste)

longest_word = ""
for word in liste:
    if len(word) > len(longest_word):
        longest_word = word
print(f"longest_word(\"{string}\") ➞  \"{longest_word}\"")