# TypeScript & Flow

Type-aware linting.

There is not a one size fits all. Even with respect to that decision, team should decide democratically. --> Style guide.

Benefits of Typescript and Flow:
* Catch type-related mistake
* Communicate type intent -> typing is in the code.
* Provide IDE feedback


Caveats
* Inferencing is best guess, not a guarantee
* Annotations are optional. Dev not putting it, is optional. Can lead to false sense of security
* Any part of the application taht isn't type introduces uncertainty.

## Inferencing

````
var teacher = "Kyle";

//..

teacher = { name: "Kyle" }
// Error: can't assign objects
// to string
````

Static type, infering the type base on variable assigned to it.

````
var teacher: string = "Kyle";

````


## Custom Types

````
type student = { name: string };

function getName(studentRec: student): string{
  return studentRec.name;
}

var firstStudent: student = {name : "Frank"};
var firstStudentName: string = getName(firstStudent);
````

A parameter to a function is like a variable.

## Validating Operand Types

var studentName: string = "Frank";
var studentCount: number - 16 - studentName;
// error: can't subtract string

* In typescript, you opt into it fully or not.

https://github.com/liieani/typescript-vs-flowtype

## Static Typing Pros
* They make types more obvious in code.
* Familiarity: they look like other language's type systems
* Extremely popular these days.


## Static Typing Cons
* They use "non-JS-standard" syntax (or code comments)
* They require* a build process, which raises the barrier to entry
* Their sophistication can be intimidating to those without prior formal types experience
* They focus more on "static types" (variables, parameters, returns, properties, etc) than value types.


# Final Observation: 
Javascript has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons.

Part of the problem with avoidance of whole swaths of JS, like pretending === saves you from needing to know types.

You cannot write quality JS programs without knowing the types involved in your operations.
