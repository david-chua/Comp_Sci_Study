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

````
hi = "hello there"
name = "ana"
greet = hi + name
print(greet) --> hello thereana
greeting = hi + " " + name
print(greeting) --> hello there ana
silly = hi + (" " + name)*3
print(silly)  --> hello there ana ana ana
````

################################
### Input / Output
################################

using commas(,), Python automatically inserts space
using plus(+), Python does not add space.

````
x = 1
print(x) --> 1
x_str = str(x)
print("my fav number is", x, ".", "x=", x) --> my fav number is 1 . x= 1
print("my fav number is", x_str + "." + "x=" + x_str) --> my fav number is 1.x=1
print("my fav number is" + x_str + "." + "x=" + x_str) --> my fav number is1.x=1
````

INPUT/OUTPUT: input("")
- prints whatever is in the quotes
- user types in something and hits Enter
- binds that value to a variable
````
eg: text = input("Type anything...")
print(5*text)

````

- input gives you a string so must case if working with numbers
````
eg: num = int(input("Type a number... "))
print(5*num)

````

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
not a --> False if a is True

a and b --> True if both are True

a or b --> True if either or both are True

| A | B | A and B  | A or B |
| --|:----------:|:--:| -----:|
| True| True | True  | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |


## Control Flow -- Branching

Conditions --> decides if code goes into the code block or not.

      if, else, elif evaluates expression in that block if<condition> is True

Using if, else construct determines that code goes one pathway or another.

## Indentation

- matters in Python
- how you denote blocks of code

````
x = float(input("enter a number for x: "))
y = float(input("Enter a number for y: "))
if x == y:
    print("x and y are equal")
    if y != 0:
        print("therefore, x/y is ", x/y)
elif x < y:
    print("x is smaller")
else:
    print("y is smaller")
print("thanks")
````

## Loops:

![Nested If](https://github.com/david-chua/Comp_Sci_Study/blob/master/Introduction%20to%20Computer%20Science%20and%20Programming%20in%20Python/Images/Lecture1/Nested_If.png "Nested if")

![While](https://github.com/david-chua/Comp_Sci_Study/blob/master/Introduction%20to%20Computer%20Science%20and%20Programming%20in%20Python/Images/Lecture1/While.png "While loops")

## Control Flow

while LOOP example

You are in the Lost forest.

Go left or right?

Program:

````
n = input("You're in the Lost Forest. Go left or right? ")
while n == "right":
    n = input("You're in the Lost Forest. go left or right? ")
print("You got out of the Lost Forest")

````

## While and for loops
- make sure that you have an increment if you have a loop counter

````
n = 0

while (n < 5):
    print(n)
    n = n + 1
````
- From example above, having infinite loop will never exit the loops

````
for n in range(5):
    print(n)
````

- this is the same example as the code above

## Control Flow: for LOOPS

````
for <variable> in range(<some_num>):
    <expression>
    <expression>
    ..

````

- each time through the loop, <variable> takes a evaluate
- first time, <variable> starts at the smallest value
- next time, <variable> gets the prev value + 1

range(start, stop, step)
- default values are start = 0 and step = 1 and optional
- loop until value is stop -1

````
mysum = 0
for i in range(7, 10):
    mysum +=i
print(mysum)


mysum = 0
for i in range(5, 11, 2):
    mysum +=i
print(mysum)
````

## break statements
- immediately exists whatever loop it is in
- skips remaining expressions in code blocks
- exists only innermost loops

User for loops when
- know number of Iteration
- can end early via break
- uses a counter
- can rewrite a for loop using a while loop

User while loops when
- unbounded number of iterations
- can end early via break
- can use a counter but must initialize before loop and increment inside loops
- may not be able to rewrite a while loop usin ga for loop
