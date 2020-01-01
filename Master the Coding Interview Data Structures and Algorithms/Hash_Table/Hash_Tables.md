# Hash Tables
Contains a key value pair.

basket.grapes = 10000
Contains key: "grapes"

How hash tables works:
Insert key in hash table function, and it stores both key and value.

## What is a hash function?

It is a function that generates a value for each input.
There are many types of hash functions (md5, sha256, etc).
It uses an inputs and  generates a random pattern based on the function.

Input will always produce the same output.

Idempotent- a function given the same input always returns the same output.

With hash tables, we need to give a key to run the hash function to return the encrypted value.

## Hash Methods
Insert - O(1)
Lookup - O(1)
Delete - O(1)
Search - O(1)

## Hash Collisions

```
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('Aahhhh!');
  }
}

user.age // 54
user.spell = 'abra kadabra'; // this adds an item to the object.

````

One of the main problems with hash tables.
- Creating a hash tables has a set memory in most items.

Example:

In a table with only 12 tables in memory, you run into issues of Collisions

If adding hash tables where collisions occur. Items further in the same location, it creates a run time of O(n) when trying to lookup an item.

In JS,
There are Maps which allows to store any keys (string, number, functions). Maps also have a maintained ordered
There are also Sets which only stores keys and no values.


## Hash Tables vs Arrays:

Arrays:
* Search: O(n)
* Lookup: O(1)
* Push*: O(1)/O(n)
* Insert: O(n)
* Delete: O(n)

Hash Tables
* Search: O(1)
* Insert: O(1)
* Lookup: O(1)
* Delete: O(1)
