#Challenge 1
number = int(input("entre number : "))
length = int(input("entre length : "))

liste = []
for i in range(1, length + 1) :
    liste.append(i*number)

print(f"number: {number} - length {length} ➞  {liste}")

#Challenge 2
string = input("entre string : ")
print(f"user's word : \"{string}\" ➞  \"{''.join(dict.fromkeys(str(string)))}\"")
