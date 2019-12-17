# Scope

Another pillar of JavaScript.
Understanding lexical scope to understand closure.

Scope: where to look for things.
- What is it that we are looking for.

All variables are either receiving a value or you're retrieving the value.

Essentially asking what position is it in and what scope is it in.

The processing is an actual step in JS.  

What does JS processing looks like.
In compiler theory, there are 4 stages.
1,2) Lexing and tokenization
3) Parsing
4) Code Generation.

We need to think about when all bucket sorting happens.

Processing of our scope and putting it in the correct place.

JavaScript has a parser that goes through the javascript code and interprets the stuff. If it enters a scope, it evaluates it.

* JavaScript organizes scopes with functions and blocks
* We create a "marble" and drop it in the appropriate bucket.

````
var teacher = "Kyle";

function otherClass(){
  var teacher = "Suzy";
  console.log("Welcome!");
}


function ask(){
  var question = "why?";
  console.log(question);
}

otherClass();           // Welcome!
ask();                  // Why?

````
