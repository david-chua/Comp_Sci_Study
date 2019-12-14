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
