console.log('-------------- string and properties  ----------------')

//   string  is used to store the  combination of chracters

const  stringvar =  " i am string varible and  i store  combintion of chracters"
console.log(stringvar)


// string.length is used to find the length of the string

const stringlength =  ' let find my length how many chracter i have.'
let findlengthofstring = stringlength.length
console.log(`${stringlength}, length of string: ${findlengthofstring}`)


// string.replce its replace the current string tp another string

let mystringtoreplace = 'my name is saad'
let  stringreplace = mystringtoreplace.replace('my name is saad','my name is naveed siraj')

console.log('currentstring:' ,mystringtoreplace)
console.log('currentstring:' ,stringreplace)

// 	Replace  use to replace all the text
// syntex    yourstring.replaceAll('currentsytring' , 'newstring')

//  Indexof  use to find the index of chracter in a given string

let numbers = [1, 2, 3, 4, 5];
let searchNumber = 3;

let index = numbers.indexOf(searchNumber);
console.log(index)

// 	Lastindexof   use for to find the last index of any chacvter in given string

const lastindexofstringfind = 'programming';

const findindexofstring = lastindexofstringfind.lastIndexOf('m');
console.log('last index of m in  programming  is :',findindexofstring)


//   Startswith  use kege che kala mung ghwro che yw given string ke da sa na start kege.

let testlastindexfind = "programming";
const startingchar = testlastindexfind.startsWith('p');
console.log(startingchar);


// endswith   use kege che kala mung find kw che yw string de che agha pa sa bande end kege

let sentence = "Java is to JavaScript what Car is to Carpet.";

// checking if the given string ends with "to Carpet."
let check = sentence.endsWith("to Carpet.");

console.log(check);

// String touppercase use for  to change all the stringf element to uppercase

const name4 = 'naveedsiraj';

const name4toupercase = name4.toUpperCase();

console.log(name4toupercase);


// String tolowercase  use for to convert all the string element to lowercase

const name4tolowercase = name4.toLowerCase();

console.log(name4tolowercase);

// string include()  use for when we check some string present in the given string or not  and its retrun boolean value

const str2 = "Java script is a beautiful programming language.. ";

let checkstr = str2.includes('beautiful');

console.log(`string =   ${checkstr}`)

// string repeat   use for wjhen we want to repaet particular string according to our need

 const stringrepat =  'beautiful'

  const stringtoberepeat = stringrepat.repeat(4);

  console.log( stringtoberepeat)


  // string .reverse  used for to reverse a string

  const mystringreverse = 'naveeedsiraj';

  const string_reverse = mystringreverse.split('').reverse().join();

  console.log(string_reverse);

  // split function   use for to convert string to array of string ..

  const splitstring = 'my name is naveedsiraj of manyar swat';

  const splittheabovestring =  splitstring.split(',');
  console.log(splittheabovestring)

  // trim function use for when we want to remove white spaces from the string ;

  const triminput = '    i am trim input text'

  const trimtheabovetext = triminput.trim()

  console.log(trimtheabovetext)

  // splice function use for adding and removing the element of array

  const arrayofmy = [1,2,3,4,5]

  const adding_element_to_array = arrayofmy.splice(5,0,6);
  const removedElement = arrayofmy.splice(1, 1);
  console.log(arrayofmy)


