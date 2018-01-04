// regex in js
var re1 = new RegExp("abc");
var re2 = /abc/;

var eightteenPlus = /eighteen\+/;

// backslashes escape a characters normal meaning
// backslash characters that are not whitespace, letter or number

// methods

// test

console.log(re1.test("abcde"));
console.log(re1.test("abxde"));

// square brackets is like or between every character within them

console.log(/[0123456789]/.test("in 2199"));
console.log(/[0-9]/.test("in 1992"));

// dashes indicate range, which is defined by their unicode ordering

// \d conveys the same as [0-9]
/* s = space
   d = digit
   w = word character
*/

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test('30-01-2003 15:20'));
console.log(dateTime.test('30-jan-2003 15:20'));

// inverting a set of characts us ^ (not these characters)

var notBinary = /[^01]/;
console.log(notBinary.test('1101110101001'));
console.log(notBinary.test('201101010'));

// + indicates one or more of something

console.log(/'\d+'/.test("'123'"));

// * is + but allows the pattern to match zero times

console.log(/'\d*'/.test("''"));

// ? creates optional

var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"))
console.log(neighbor.test("neighbor"))

// date type
// new seems to create new instances of class

console.log(new Date());

// months are indexed at zero in js

// choice patterns

var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));

//replace method

console.log("papa".replace("p", "m"));

//ad g, for global at the end

console.log("Borobudur".replace(/[ou]/g, "a"));

// one can group sections of a regular expression using parenthis and call them with $# in second arg

console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
  .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));

var s = 'the cia and fbi';
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));


// the Search method

