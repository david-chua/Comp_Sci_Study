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

å
