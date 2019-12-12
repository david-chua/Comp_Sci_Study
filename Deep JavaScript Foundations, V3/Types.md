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

````
var myAge = Number("0o4");          // 38
var myNextAge = Number("39");       // 39
var myCatsAge = Number("n/a");      // NaN
myAge - "my son's age";             // NaN

myCatsAge == myCatsAge;             // false OOPS;

isNan(myAge);                       // false
isNan(myCatsAge);                   // true
isNan("my son's age");              // true OOPS;

Number.isNaN(myCatsAge);            //true
Number.isNaN("my son's age");       // false
````


NaN is the only value that is not equal to itself.

Negative Zero - it exist in programming.

````

var trendRate = -0;
trendRate === -0;         // true
trendRate.toString();     // "0" OOPS!
trendRate === 0;          // true OOPS!
trendRate < 0;            // false
trendRate > 0;            // false

Object.is(trendRate, -0);   // true
Object.is(trendRate, 0);    // false

````

````
Math.sign(-3);      // -1
Math.sign(3);       // 1
Math.sign(-0);      // -0 WTF?
Math.sign(0)        // 0 WTF?

function sign(v){
  return v !== 0? Math.sign(v) : Object.is(v, -0) ? -1: 1;
}

sign(-3);       // -1
sign(3);        // 1  
sign(-0);       // -1
sign(0);        // 1

````

````
function formatTrend(trendRate){
  var direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "Up" : "down";

  return "${direction} `{Math.abs(trendRate)}`;
}

formatTrend(-3);      // "down 3";
formatTrend(3);       // "up 3";
formatTrend(-0);      // "down 0";
formatTrend(0);       // "up 0"
`````

Polyfill for Object.is(..)

Instructions:

1. `Object.is(..)` should take two parameters
2. It should return 'true' if hte passed in parameters are exactly the same value (not just `===` -- see below!), or 'false' otherwise.
3. For 'Nan' testing, you can use 'Number.isNaN(..)', but first see if you can find a way to test without usage of any utility?
4. For `-0` testing, no built in utility exist, but here's a hint: '-Infinity'.
5. If the parameters are any other values, just test them for strict equality.
6.) You cannot use the built in `Object.is(..)` -- that's cheating!

````
if (!Object.js || true ){
  Object.is = function ObjectIs(x,y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero){
      return xNegZero && yNegZero;
    }
    else if (isItNan(x) && isItNan(y)){
      return true;
    } else {
      return x === y;
    }


    // ****** utility for finding if negative zero
    function isItNegZero(v){
      return v == 0 && (1/v) == -Infinity;
    }

    function isNaN(v){
      return v !== v;
    }
  };
}

````


## Fundamental Objects aka Built-in objects aka Native Functions

Use new:
* Object()
* Array()
* Function()
* Date()
* RegExp()
* Error()

Don't use new:
* String()
* Number()
* Boolean()

var yesterday = new Date("March 6, 2019");
yesterday.toUTCString();

// "Wed, 06 Mar 2019 06:00:00 GMT"

var myGPA = String(transscript.gpa);
// "3.54"
