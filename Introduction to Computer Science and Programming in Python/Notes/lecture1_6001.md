How do you represents problems with data structures

## Topics:

#### Section 1

1. Represents knowledge with data structures
2. Iteration and recursion as computational metaphors

####  Section 2

1. Abstraction of procedures and data types
2. Organize and modularize systems using object classes and methods

#### Section 3

1. Different classes of algorithms, searching, and sorting
2. Complexity of Algorithms


################################
### Strings
################################

hi = "hello there"

name = "ana"

greet = hi + name

print(greet) --> hello thereana

greeting = hi + " " + name

print(greeting) --> hello there ana

silly = hi + (" " + name)*3

print(silly)  --> hello there ana ana ana

################################
### Input / Output
################################

using commas(,), Python automatically inserts space
using plus(+), Python does not add space.

x = 1

print(x) --> 1

x_str = str(x)

print("my fav number is", x, ".", "x=", x) --> my fav number is 1 . x= 1

print("my fav number is", x_str + "." + "x=" + x_str) --> my fav number is 1.x=1

print("my fav number is" + x_str + "." + "x=" + x_str) --> my fav number is1.x=1

INPUT/OUTPUT: input("")
- prints whatever is in the quotes
- user types in something and hits Enter
- binds that value to a variable
eg: text = input("Type anything...")
print(5*text)

- input gives you a string so must case if working with numbers
eg: num = int(input("Type a number... "))
print(5*num)


## Comparison Operators on int, float, String
- i and j are variables names
- comparisons below evaluate to a Boolean

i > j

i >= j

i < j

i <= j

i == j --> euqality test, True if i is the same as j

i != j --> inequality test, True if i is not the same as j


## Logic Operators on bools

not a --> True if a is False

          False if a is True

a and b --> True if both are True

a or b --> True if either or both are True

| A | B | A and B  | A or B |
| --|:----------:|:--:| -----:|
| True| True | True  | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |
