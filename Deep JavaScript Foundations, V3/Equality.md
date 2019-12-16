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
````


The case for preferring ==

* Knowing types is always better than not knowing them.
* Static Types is not the only (or even necessarily the best) way to know your types
* == is not about comparisons with unknown types.
* == is about comparisons with known type(s), optionally where conversions are helpful.

### If you know the type(s) in a comparison.

* If both types are the same. == is identical to ===
Using === would be unnecessary so prefer the shorter ==.

* If the types are different, using one === would be broken.

* Prefer the more powerful == or don't compare at all.

* If the types are different, the equivalent of one == would be two (or more!) === (ie. "slower");

* Prefer the "faster" single ==

* If the types are different, two (or more!) === comparisons may distract the reader.


### If you don't know the types:

* Not knowing the types means not fully understanding the code. (best to refactor to know the types)

* The uncertainty of not knowing types should be obvious to the reader.

* Not knowing the types is equivalent to assuming type conversion/ coercion will occur

* If you can't or won't use known obvious types. === is the only reasonable choice.

* Even if === would always be equivalent to == in your code, using it everywhere sends a wrong semantic signal: "Protecting myself since I don't know/trust the types"
