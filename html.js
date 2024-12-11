// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))
 
// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))
 
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))
 
// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))
 
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))
 
// Create a function that  takes a string as argument and returns the length of this string.
 
// write a function that takes a string as argument and returns it to number
 
// write a function that takes a number as argument and returns it to string
 
// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
 function fizzBuzz (number){
    if(number%3==0 && number%5==0){return 'FizzBuzz'}
    else if (number%3==0){return 'Fizz'}
    else if (number%5==0){return'Buzz'}
    else{return number}
 }
 console.log(fizzBuzz(8))
// Exercise 2
 
// Математикт n!-ээр тэмдэглэсэн сөрөг бус n бүхэл тооны факториал нь n-ээс бага буюу тэнцүү бүх эерэг тоонуудын үржвэр юм.
// Энгийнээр хэлбэл 7-ын хүчин зүйлийг дараах байдлаар шийднэ.
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
// Example:
// > console.log(factorializer(7));
// > 5040
function factorial(number1){
    let sum = 1
    for(let i = 1 ; i<= number1; i++){
        sum = sum * i
    }return sum
}
 console.log(factorial(7))
// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd
 
// Example:
// > console.log(oddOrEven(7));
// > "Odd"
function numberOddEven (number1){
    if( number1 % 2 == 0 ){return number1+' Even'}
    else {return number1+' Odd'}
}
console.log(numberOddEven(19))
 
// Exercise 4
 
// Return the sum of a number going back to it's root. In other words, the function will work like this:
 
// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36
function addUp(number){
    let sum = 0
    for(let i = 0 ; i<= number; i++){
        sum = sum + i
    }return sum
}
 console.log(addUp(8))
// Exercise 5
 
// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false
 function isEmpty (str){
    for(let i = 0; i <= str.length; i++){
         if (str[i]>=[0]) {return 'false'}
        else  {return 'true'}
       
    }
 }
 console.log(isEmpty(''))

// Exercise 6
 
// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.
 
// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true
function isEqualStr(str,str2){
    if(str.length==str2.length){return 'true'}
    else {return 'false'}
}
console.log(isEqualStr('1234','1232'))
 
// Exercise 7
 
// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false
function oneDevideByTwo(number,number1){
if(number % number1==0){return 'true'}
else {return 'false'}
}
console.log(oneDevideByTwo( 21 , 2 ))


 
// Exercise 8
 
// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

function moodTodey(str){
   
  return `Todey, i am feeling ${str}`
}
console.log(moodTodey('happy'))
 
// Exercise 9
 
// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
 function match(match,match2){
    if(match.toUpperCase()=== match2.toUpperCase()){return 'true'}
    else {return 'false'
    }
 }
 console.log(match('broo','BRoO'))
// Exercise 10
 
// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
 function getCase(str){
  
    if(str==str.toUpperCase()){return 'upper'}
    else if (str==str.toLowerCase()){return 'lower'}
    else {return 'upperlower'}
 }
 console.log(getCase('QQ'))
// Exercise 11
 
// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
function swapName(str){
    let p = str.split(' ').reverse().join(' ')
    return p
}
console.log(swapName('asas rrr'))
/* function swapName(str,str2){
    
    return str+ ' ' +str2
}
console.log(swapName('qwer','1234')) */
 
// Exercise 12

 
// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
 function AlphabetSoup(str){
    let str2 =str.split('').sort().join('')
    return str2
 }
 console.log(AlphabetSoup('afsasdfa'))
// Exercise 13
 
// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
 
//console.log("functions2");
function incrementOrDecrement(number){
    if(number%2==0){return number+1}
    else {return number-1}
}
console.log(incrementOrDecrement(2))
 
// Exercise 1
 
// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
 
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
 
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
 function tipAmount(number){
    if(number > 40 ){
        return number/5
    }
else if ( number <= 40){
    return number/5
}
else if (number < 20)
    return (10/number)*100
 }
 console.log(tipAmount(100))
// Exercise 2
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
 
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function totalAmount(number){
    if(number > 40 ){
        return (20/number)*100 + number
    }
else if ( number <= 40){
    return (2.4/number)*100 + number
}
else if (number < 20)
    return (10/number)*100 + number

 }
 console.log(totalAmount(40))
 
// Exercise 3
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
 
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23
function splitAmount(number){
    if(number > 40 ){
        return ((20/number)*100 + number) / 5
    }
else if ( number <= 40){
    return ((2.4/number)*100 + number ) / 3
}
else if (number < 20)
    return ((10/number)*100 + number ) / 5

 }
 console.log(splitAmount(40))
 
// Exercise 4
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
function isVowel(str){
  let char = str.toLowerCase()
    if(char == 'a' || char == 'e' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        return 'true'
    }
    else {return 'false'}
}
console.log(isVowel('1'))
 
// Exercise 5
 
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
 function rockPaperScissors(player1, player2){
    
    if (player1 == 'rock' && player2 == 'scissors'){
        return 'player1'
    }
    else if (player1 == 'paper' && player2 == 'rock'){return 'player1'}
    else if (player1 == 'scirssors' && player2 == 'paper'){return 'player1'}
    else if (player2 == 'rock' && player1 == 'scissors'){
        return 'player2'
    }
    else if (player2 == 'paper' && player1 == 'rock'){return 'player2'}
    else if (player2 == 'scirssors' && player1 == 'paper'){return 'player2'}
    else if (player2 == 'rock' && player1 == 'rock'){return 'draw'}
    else if (player2 == 'paper' && player1 == 'paper'){return 'draw'}
    else if (player2 == 'scirssors' && player1 == 'scirssors'){return 'draw'}
    else { return 'Error'}
 }
// Exercise 6
 
// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy(start, end){
/* let i = start */
let slade = ''
while( start < end ){
    slade += start + '_'
    start++ 
    
}
return slade + end
}
console.log(numberJoinerFancy(1,11))
// Exercise 7
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
 function reverse(str){
    let str2 = str.split('').reverse().join('')
    return str2
 }
 console.log(reverse('skoob'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
 function findLongestWord(str){
    let str2 = str.split(' ').splice(1,1).join('')
    return str2
 }
 console.log(findLongestWord('a book full of dogs'))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
 function nicer(str){
    let str2 = str.split('heck').join('')
    return str2
 }
 console.log(nicer('mom get the heck in here and bring me a darn sandwich.'))
// Exercise 8
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalize(str) 
{
    str = str.split(" ")
    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ')
}

 console.log(capitalize('hello world'))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
 function split(str){
 
    
    return str.split('-')
 }
 console.log(split('a-b-c', '-'))
 function splitXX(str){
    let str2 = str.split('xx')
    
    return str2
 }
 console.log(splitXX('APPLExxBANANAxxCHERRY', 'xx'))
 function splitXYZ(str){
    let str2 = str.split()
    
    return str2
 }
 console.log(splitXYZ('xyz', 'r'))

// Exercise 9
 
// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(number){
    let number2 = 0
    number2 = number2 +  number[0]
    number2 = number2 +  number[1]
    number2 = number2 +  number[0,2]
return number2
}
console.log(sumNumbers([1, 4, 8]))
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// number2 = number2 +  number[0]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
 function positives(number){
    for(let i = 0; i<=number; i++){
        if(number[i]>0){return number[i]}
    }
 }
 console.log(positives([1, 2, 3]))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
 
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
 
//Exercise
 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
// You can return the answer in any order.
 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
//Exercise
 
// Given an integer x, return true if x is palindrome integer.
 
// An integer is a palindrome when it reads the same backward as forward.
 
// For example, 121 is a palindrome while 123 is not.
 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
 
//Exercise
 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 
// An input string is valid if:
 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
 
// Input: s = "()"
// Output: true
// Example 2:
 
// Input: s = "()[]{}"
// Output: true
 
//Exercise
 
// write a JavaScript function that checks if the string is palindrome or not.
 
// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.
 
// Input: s = "dad"
// Output: true
// Example 2:
 
// Input: s = "civic"
// Output: true
 
// Input: s = "race"
// Output: false