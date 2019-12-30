## Arrays

* Also known as list.

Complexities:

* lookup O(1)
* push O(1)
* insert O(n)
* delete O(n)


## Two types of arrays:

1. Dynamic
2. Static

Static arrays have a specific number of items and cannot grow.
Dynamic array - allows you to be able to create bigger arrays without specifying a limit.

JavaScript automatically allocate memory.

* There's times where you it's better to control memory and other times where it's good to just have the computer be able to add it.

Dynamic Array:
* lookup O(1)
* append O(1) can also be O(n)  
* insert O(n)
* delete O(n)

const strings = ['a', 'b', 'c', 'd'];
if strings is a 4 item array,
adding a 5th item,
JavaScript moves this into a new memory copying it and creating a bigger array
like adding 'e' = ['a', 'b', 'c', 'd','e'];
