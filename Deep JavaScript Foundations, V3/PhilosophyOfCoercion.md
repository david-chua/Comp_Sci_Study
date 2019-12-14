# Philosophy of coercion

You don't deal with these type corner cases by avoiding the cases.

You have to adapt a coding style that makes value types plain and obvious.

A quality JS program embraces coercions, making sure the types involved in every operation are clear. Thus, corner cases are safely managed.

Type Rigidity --> Not the only solution
Static Types --> Not the only solution
Type Soundness --> Not the only solution

These are types of reaction, but not necessarily the solution.

JavaScript's dynamic typing is not a weakness, it's one of its strong qualities.

First truly multi-paradigm language.


## Culture of Learning

Do not subscribe to the belief to dumb down code.

When somebody on the code base, doesn't understand, use code review, peer to peer learning to help tool work better.

Lazy excuse to not promote learning.

Do not be clever if it's not communicative.

Make sure that code can be translated in another situation if needed. Not something that you learn once and never use again.

## Implicit coercion

Think of implicit as abstracted.

Hide unnecessary details and re-focus readers on important stuff.
Some of the implicit nature of JS are sketch but some of it is quite useful as the detail of hiding things like boxing, allows you to use it quickly and more useful.

Implicit can be good.

Less than operator coerces things into a number.
In less than, if one of the value is a number, it is implicit to turn the other number into a number.

Is showing the reader extra details helpful or distracting? It depends.
