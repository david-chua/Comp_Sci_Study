# Equality

== vs ===

Coercion issue is mostly with equality.
Place where most people focus attention

There are some further dissection

== checks value (loose)
=== checks value and type (strict)

This is not necessarily the case.

Both check the types


````
var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2;       // true
studentName1 === studentName2       // true

workshopEnrollment1 == workshopEnrollment2    // true
workshopEnrollment1 === workshopEnrollment2   // true

If types match, do the spec does the triple equal.

````

In ===, if types are different, automatically returns false.


````
var workshop1 = {
  name: "Deep JS Foundations"
};

var workshop2 = {
  name: "Deep JS Foundations"
};

if (workshop == workshop2) {
  // Nope
}

if (workshop === workshop2){
  // Nope
}

````

This is because workshop and workshop2 are two different objects.

## Coercive Equality

````
== prefers Number comparison.

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if (Number(workshopEnrollment1) === Number(workshopEnrollment2)){
  //..
}


if (workshopEnrollment1 == workshopEnrollment2){
  // ..
}

````



## Coercive equality

````
var workshop1Count = 42;
var workshop2Count = [42];

if (workshop1Count == workshop2Count){
  // if (42 == "42"){
  // if (42 == 42){
  if (true){
    // Yep (hmm...)
  }
}

````


## Double Equals Corner cases

* [] == ![];      // true WHAT?


````
var workshop1Students = [];
var workshop2Students = [];

//if (workshop1Students == !workshop2Students){
// if ([] == false) {}
// if ("" == false){}
// if (0 == false){}
// if (0 === 0){}
if (true) {
  // true
}

if (workshop1Students != workshop2Students){
if (workshop1Students == workshop2Students){}
if (!(false)){}
if (true){
 // true
}

````

## Boolean Corner cases


````

var workshopStudents = [];

if (workshopStudents){
  // yep
}

if (workshopStudents == true){
// if ("" == true){}  --> becomes primitive
// if (0 == 1){}   --> false
// if (false){
  // Nope :C
}

if (workshopStudents == false){
if ("" == false){}
if (0 === 0){}  
  // Yep :C
}


// Boolean Corner Cases Summary

1) Avoid == if one is 0 or "" or even (" ")
2) Avoid == with non-primitives
3) Avoid == true or == false: allow ToBoolean or use ===
