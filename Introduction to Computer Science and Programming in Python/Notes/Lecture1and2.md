## Computer prints out without spacing unless specified. Shows that computer follows only what they interpret we wrote.

![Python Strings](https://github.com/david-chua/Comp_Sci_Study/blob/master/Introduction%20to%20Computer%20Science%20and%20Programming%20in%20Python/Images/PythonStrings.png "Python String")

## Printing using user input:

![Python Input](https://github.com/david-chua/Comp_Sci_Study/blob/master/Introduction%20to%20Computer%20Science%20and%20Programming%20in%20Python/Images/StringInput.png "Input Example")

## Comparing string and number is not possible - Python throws error:

![Python String Number Comparison](https://github.com/david-chua/Comp_Sci_Study/blob/master/Introduction%20to%20Computer%20Science%20and%20Programming%20in%20Python/Images/StringNumComparison.png "String Number Comparison")

## Conditionals (Code Flow):
## Code block is kept track via indentation (typically 4 spaces):

if/else conditions:
if condition is true, execute a set of statements
if the condition is not true, do not execute, and find what condition fits or use the else to commit a direction.

Strings
Strings are "immutable" - cannot be modified
Example:

```s = "hello"
s[0= 'y'  --> No possible
s = 'y' + s[1:len(s)] ==> returns "yello'
```


```s = "abcdefgh"

for index in range(len(s)):
  if s[index] == i or s[index] == u:
    print("There is an i or u")


for char in s:
  if char == 'i' or char == 'u':
    print("There is an i or u")
```    


```an_letters = "aefhilmnorsxAEFHILMNORSX"
word = input("I will cheer for you! Enter a word: ")
times = int(input("Enthusiasm level ( 1- 10): "))
i = 0
while i < len(word):
  char = word[i]
  if char in an_letters:
    print("Give me an " + char + "! " + char)
  else:
    print("Give me a  "  + char + "! " + char)
  i +=1
print("What does that spell?")
for i in range(times):
  print(word, "!!!")
```

Other way to write this:

```
word = input("I will cheer for you! Enter a word: ")
times = int(input("Enthusiasm level ( 1- 10): "))
for char in word:
  if char in an_letters:
    print("Give me an " + char + "! " + char)
  else:
    print("Give me a  "  + char + "! " + char)
  print("What does that spell?")
for i in range(times):
  print(word, "!!!")
```
