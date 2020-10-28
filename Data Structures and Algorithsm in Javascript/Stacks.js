## Stacks

// Last Item in Last Item out.
// LIFO
stack = []
stack.add(1); // [1]
stack.add(2); // [1,2]
stack.add(3); // [1,2,3]
stack.remove(); //[1,2]
stack.add(4); //[1,2,4]
stack.remove(); // [1,2]

Interface: Stacks

// Constructor function
// - Storage
// Methods 
// push(value) //adds value to the front, returns size of stack
// pop() // removes
// size() // returns size of stack as integer.

var Stack = function(){
  this.storage = "";
};

Stack.prototype.push = function(val){
  this.storage = this.storage.concat("***", val); // stores values with ***example
};

Stack.prototype.pop = function(){
  // slice of last characers up until ***
  var str = this.storage.slice(this.storage.lastindexOf('***') + 3);
  // updating new stack without the last item.
  this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'))
  // returning the last item.
  return str;
};

Stack.prototype.size = function(){

};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
