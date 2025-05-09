string = str(input("Enter a sequence of numbers separated by commas: ")).lower()
liste = string.split(",")
liste.sort()
print(*liste, sep = ",")


