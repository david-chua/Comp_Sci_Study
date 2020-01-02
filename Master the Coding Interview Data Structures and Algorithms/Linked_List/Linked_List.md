# Linked Lists

## Two Types of Linked Lists

Singly and Doubly (One direction or dual direction)

## What is a Linked List:
It's a list that is linked (connected)
It contains a set of nodes that have two info: value and next
Linked List has a null pointer, which marks the end of the Linked Lists.

## Linked List Psuedo Code:

````
const basket = ['apples', 'grapes', 'pears'];

linkedlist: apples --> grapes --> pears

apples
8947 --> grapes
          8742 --> pears
                    372 --> null

````
JavaScript has no linked list. Other languages does.

## Why Linked List:

* It's easy to insert and delete
* Linked List traversal
* One con:  Array has sequential memory (Linked List are scattered all over memory).
* There is some sort of order in a Linked List compared to a Hash Table.


## Time Complexity:

* Prepend - O(1)
* Append - O(1)
* Lookup - O(n)
* Insert - O(n)
* Delete - O(n)


## Pointer

````
const obj1 = {a: true}
const obj2 = obj1;

````

we created a pointer to reference another object in memory.


## Doubly Linked List

* Prepend - O(1)
* Append - O(1)
* Lookup - O(n)
* Insert - O(n)
* Delete - O(n)

## When to use Singly Linked List vs Doubly Linked List?
Singly Linked List

* More simple
* Less memory taken
* Fast insertion and deletion
* Not a lot of searching

Doubly Linked List

* Can traverse front to back
* Complex to implement
* Requires more memory
* Extra operations to perform to update when inserting and removing
* Searching is good because you can go both ways.

## Linked List Review

Pros:

* They are ordered
* Fast insertion
* Fast Deletion
* Flexible Size

Cons:

* Requires more memory
* slow lookup
* There's no random access - when looking for something, you need to traverse the list to find the item.
