

dist = {}

def letter_dictionary(word):
    if word[i] in dist:
        dist[word[i]].append(i)
    else:
        dist[word[i]] = [i]

word = input("Enter a word : ")
for i in range(len(word)):
    letter_dictionary(word)
    
print(f"{word} ➞  {dist}")
#dist = list(map(lambda))