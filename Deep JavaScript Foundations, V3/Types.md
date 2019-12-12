# JavaScript Types

If you've chosen to make your career be a JavaScript developer, you should understand your tool.

## 3 Pillars of JavaScript:
1) Types
2) Scopes
3) Objects


### Types
* Primitive Types
* Abstract Operations
* Coercion
* Equality
* TypeScript, Flow, etc.

### Scopes
* Nested Scope
* Hoisting
* Closure
* Modules

### Objects (Oriented)
* this
* class{}
* Prototypes
* OO vs OLOO


"In JavaScript, everything is an object."
- statement is false
- everything can be an object.
- false is not an object.


#Primitive Types:
* Undefined
* string
* number
* boolean
* object
* symbol (newly added in ES6) - used to create pseudo private keys.

- something can behave as an object doesn't mean it's an object.

* undeclared?
* null?
* function? - JS refers to it as subtype of an object.
* array? - another subtype of object. A special type of object. Not a type level type, but a kind of value that has a specific behavior.
* bigint? - large integer support (implemented in V8).

## Not Objects in the primitive type list:
- Undefined
- string
- number
- boolean
- object
- symbol
- null
- bigint(future)

## objecsts:
- object
- function
- array

"In JavaScript, variables don't have types, values do."

````
var v;   
typeof v;   // "undefined"
v = "1";
typeof v;   // "string"
v = 2;
typeof v;   // "number"
v = true;
typeof v;   // "boolean"
v = {};
typeof v;   // "object"
v = Symbol();
typeof v;   // "symbol"

````

typeof returns a string.

````
typeof doesntExist;   // "undefined"

var v = null;
typeof v;             // "object"

v = function(){};
typeof v;             // "function"

v = [1,2,3];
typeof v;             // "object"
````

## BigInt
````
// coming soon
var v = 42n;
// or: var v = BigInt(42)
typeof v;             // "bigint"
````

## Undefined vs Undeclared vs uninitialized (aka TDZ)

* variable didn't exist.
* TDZ (temporal deadzone) - idea is that certain variables don't get set to undefined. When in uninitialized state, you can't touch it.

* Undefined - have a variable that's been initialized, that is undefined.
* Undeclared - have a variable that was never even created, then it's undeclared.
* Uninitialized - have a variable that's never been initialized.


## Special Values
Nan - ("not a number") - this special sentinel value indicates an invalid number.
