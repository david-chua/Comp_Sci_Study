
````
var object1 = { value: 10}
var object2 = object1;
var object3 = { value: 10}

object1 === object2   // true
object1 === object3   // false
object1.value = 15;
object2.value  // 15
object3.value  // 10
````

## Reference types:

````
var number1 = 1
var number2 = 1

var object1 = {value: 10}
var object2 = object1;
var object3 = {value: 10}
````

Object1 creates a new object. Object2 references Object1. When Object3 gets created, it creates a new object.

## Context

context tells you where we are in an object.
"this" - window object.

````
function a(){
  console.log(this)
};
````
"this" is still the window object.

````
const object4 = {
  a: function(){
    console.log(this)
  }
}
````
"this" in objec4 is the object4 object.

## Instantiation

````
class Player {
  constructor(name, type){
      this.name = name;
      this.type = type;
  }

  introduce(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}
