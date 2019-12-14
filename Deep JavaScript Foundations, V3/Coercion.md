# Abstract Operations aka Coersion

ToPrimitive(hint)

hint: "number"
valueOf()
toString()

If hint was number, it tries valueOf() and then toString() if both fails, then it throws an error

hint: "string"
toString()
valueOf()

Same scenario different order.

## ToString()

This abstract operation takes any value and gives the representation in string form.

null --> "null"
undefined --> "undefined"
true --> "true"
false --> "false"
3.14159 --> "3.14159"
0 --> "0"
-0 --> "0" // OOPS --> Incorrect

ToString(object): ToPrimitive(string)
aka: toString() / valueOf()

[] --> ""
[1,2,3] --> "1,2,3"
[null, undefined] --> ","
[[[],[],[]],[]] --> ",,,"
[....] --> "...."

Array to stringification will never be used due to corner cases.


{} --> "[object Object]"
{a:2} --> "[object Object]"
{toString(){return"X";}} --> "X"


## toNumber()

""          --> 0
"0"         --> 0
"-0"        --> -0
" 009 "     --> 9
"3.14159"   --> 3.14159
"0."        --> 0
".0"        --> 0
"."         --> NaN
"0xaf"      --> 175
false       --> 1
true        --> 1
false       --> 0
undefined   --> NaN
null        --> 0

['''']      --> 0
["0"]       --> 0
["-0"]      --> -0
[null]      --> 0
[undefined] --> 0
[1,2,3]     --> NaN
[[[[[]]]]]  --> 0

{ ..}       --> NaN
{ valueOf() { return 3;}} --> 3


## toBoolean

Anytime you have a value that is not a boolean, this operation occurs.
The operation is not algorithmic but more lookup.

### Falsy
* ''''
* null
* NaN
* false
* undefined

If it's not on the Falsy list, then it's Truthy
### Truthy
* "foo"
* 23
* {a:1}
* [1,3]
* true
* function(){..}


## Cases of Coercion

Relying on coercion without realizing it example:

````
var numStudents = 16;

console.log(
  `There are ${numStudents} students `
  );
````

operator overloading. In spec, if you use the plus operator, it turns it into a number. If either one is a string, the plus operator prefers string concatenation.

Another way to coerce number to string.

````
var numStudents = 16;

console.log(
  `There are ${numStudents.toString()} students.`
  );

console.log(
  `There are ${String(numStudents)} students.`
  );

function addAStudent(numStudents){
  return numStudents + 1;
}

addAStudents(studentsInpuElem.value);        // "161"

# Force it to be a number:

addAStudents(+studentsInputElem.value);      // 17 --> invokes toNumber()
addAStudent( Number(studentsInputElem.value));  // 17)

function kickStudentOut(numStudents){
  return numStudents -1;
}

kickStudentOut(studentsInputElem.value); // 15

# Recal Falsy vs Truthy?
if (studentsInpuElem.value){
  numStudents = Number(studentsInpuElem.value);
}

while (newStudents.length){
  enrollStudent(newStudents.pop());
}

Implicitness can be useful if we're careful and intentional.

if (!!studentsInpuElem.value){
  numStudents = Number(studentsInpuElem.value):
}

# use > 0 in order to be more explicit to be more communicative.
while (newStudents.legnth > 0 ){
  enrollStudent(newStudents.pop());
}

var workshop = getRegistration(student);

if (workshop){
  console.log(`Welcome ${student.name} to ${workshop.name}.`);
}

// *********
Boolean(undefined)    // false
Boolean(null)         // false
Boolean({})           // true

````

## Boxing & Corner Cases of Coercion
Boxing - a form of implicit coercion. You have something that's not an object but turns it into an object. In JS, you are trying to access properties and methods.

All languages has type conversion corner cases.

Number( "" );                   // 0    OOPS!
Number( "    \t\n" );           // 0    OOPS!
Number(  null );                // 0    OOPS!
Number( undefined );            // NaN
Number( [] );                   // 0    OOPS!
Number( [1,2,3] );              // NaN
Number( [null] );               // 0    OOPS!
Number( [undefined] );          // 0    OOPS!
Number( {} );                   // NaN

String( -0 );                   // "0"  OOPS!
String( null );                 // "null"
String( undefined );            // "undefined"  
String( [null] );               // ""   OOPS!
String( [undefined] );          // ""   OOPS!

Boolean( new Boolean(false) );  // true OOPS!


studentsInput.value = "";       // ..

Number(studentsInput.value);    // 0

studentsInput.value = " \t\n";  // ..

There are corner cases that are not as obvious due to not dealing with typical operations.

Number(true);       // 1
Number(false);      // 0

1 < 2;              // true
2 < 3;              // true
1 < 2 < 3;          // true (but...)
(1< 2)<3;
(true) < 3;
1 < 3;              // true (hmm..)

//****

3 > 2;            // true
2 > 1;            // true
3 > 2 > 1;        // false  OOPS!

(3 > 2) > 1;
(true) > 1;
1 > 1           // false
