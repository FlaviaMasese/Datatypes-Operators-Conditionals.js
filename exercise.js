/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
//string- is a series of characters or are words e.g. 'Flavia' they are usually written in quotes */
let word='string'
let word2= 'is a series of characters'
let space=' '
let combinedWords12= word + space + word2
console.log(combinedWords12)
//Nummbers/Integers - which are written with or without decimals.
let words='Numbers'
let word22= 'which are written with orwithout decimals.'
let combinedWords122= words + space + word22
console.log(combinedWords122)
//Booleans- represented by two values True or False
let words3='Booleans'
let word23= 'represented by two values True or False.'
let combinedWords123= words3 + space + word23
console.log(combinedWords123)
//Objects- used to store collections of data and more complex entities
let words4='Objects'
let word24= 'used to store collections of data and more complex entities.'
let combinedWords124= words4 + space + word24
console.log(combinedWords124)
//Null- for unknown values
let words5='Null'
let word25= 'for unknown values.'
let combinedWords125= words5 + space + word25
console.log(combinedWords125)
//undefined- used for unassigned values/a variable without a value
let words6='undefined'
let word26= 'used for unassigned values/a variable without a value.'
let combinedWords126= words6 + space + word26
console.log(combinedWords126)
//symbol- used for unique identifiers 
let words7='symbol'
let word27= 'used for unique identifiers.'
let combinedWords127= words7 + space + word27
console.log(combinedWords127)

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* // A variable is a container for storing data values. Declared by var,let or const keyword */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
 
*/let sum = 12+20
//or
let n= 12 
n+=20
//or
let y= 12
let m= 20
let total = y+m;
console.log(total)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
let x = 12

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
let name = 'John Doe'

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
let subtraction = 12
let totalSub = subtraction-x;
console.log(totalSub)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
let name1='john'
let name2='John'
if (name1 ===name2){
    console.log(false)}
    if (name2===name1){console.log(true)}
 else{ console.log('/nNot equal')}
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let xx= 9
if (xx=1){console.log('/none')
if (xx=5){console.log('/nfive')}
} else {console.log('/nzero')}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
