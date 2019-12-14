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
