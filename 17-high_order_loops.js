console.log('--------------  high order loops  ----------------');

// for of loop  its high order loop discoverd in es6 through the for of loop we apply the iteration on the array,string ,
// object and map element ,

// insimple throgh the for of loop we apply iteration to array , string object array and map

// return type is on your requiremnet

// note : we not apply the for of loop to object.

// syntex of for of loop

// for (const iterator of  yourarray or sting name ) {
// your block of code
// }

// iterator is varible or key through we acccess the data after apply the iteration or loop

console.log('-------------- For of Loop  ----------------');

// example to apply forof loop to array

const forof_array = [1,2,3,4,5,6,7,8,9]

for (const iterator of forof_array) {
   console.log('data of array :',iterator)
}

// example to find the even and odd number in array from 0 to 10 using for of loop  and conditional statement

const forof_array2 = [1,2,3,4,5,6,7,8,9,10]
let even_number= []
let odd_number= []

for (const iterator of forof_array2) {

    if(iterator%2 ===0){
        even_number.push(iterator)

    }else {
        odd_number.push(iterator)
    }

}
console.log('evnen number in array :', even_number.join(','))
console.log('odd number in array :', odd_number.join(','))

// for of loop on string  mean we can apply for of lopp to string also to iteration on string alphabets

 const for_of_string ="NAveed siraj";

 for (const key of for_of_string) {
   console.log(key.toUpperCase())
 }


 // for of loop to array of object to iteration on the array of objetct
 const blogPosts = [
    {
        title: "Introduction to JavaScript",
        author: "John Doe",
        content: "JavaScript is a versatile programming language..."
    },
    {
        title: "Web Design Best Practices",
        author: "Jane Smith",
        content: "In the world of web design, there are several..."
    },
    {
        title: "Data Structures in Python",
        author: "Alice Johnson",
        content: "Data structures are fundamental in computer science..."
    }
];


for (const post of blogPosts) {
    // Iterate over the properties of each object
    for (const key in post) {
      // Log the key and its corresponding value
      console.log(`${key}: ${post[key]}`);
    }
    console.log('---'); // Separate each object's output
  }

//   in the above example we apply nested for of loop to array of object

const for_ofarray3 = [[1, 2, 3, 4, 5], [6,7, 8, 9, 10]];
let totalsum = 0;
for (const subarray of for_ofarray3) {
    let sum = 0;

    for (const number of subarray) {
        sum += number;
    }

    totalsum += sum;
    console.log(`${subarray.join(' + ')} = ${sum}`);
}
console.log(`Total sum of both subarrays: ${totalsum}`);

// For of loop on set : set define the unique value .
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const myset = new Set();

myset.add(1);
myset.add('naveedsiraj');

for (const key of myset) {
    console.log('my set result :',key)
}


// apply of or to map we creae amp and set some value and then apply the for of loop

let mymap = new Map();

mymap.set('Name' , 'saad');

for(let key of mymap){
   console.log(key)
}

console.log('-------------- For in Loop  ----------------');

//  for in  loop used for the enumerable property of object  its used for the iteration on object data
// its apply loop or display one by one object key and value
// by defult its display key but we also display the values .
// through for in loop we copy object to another object

// syntex of for in loop

// for (const key in your object name ) { key define the data of object which we dislay

// }

const for_in_object ={
    name:'naveedsiraj',
    age : 34,
    address :'manyar swat'
}
console.log('object data :', for_in_object)

for (const key in for_in_object) {
  console.log('key of object',key)
}
// the above example will show only key of the object

// now example we want to display the key and data of object

const for_in_object2 = {
    name : 'NaveedSirj',
    age : 23,
    eduction : "bscs",
    address : "Manyarswat"
 }

 console.log('object data :', for_in_object2)
 for (const key in for_in_object2) {
 console.log(`${key} = ${for_in_object2[key]}`)
 }

//  if (myObject.hasOwnProperty(key)) {
//     console.log(`${key}: ${myObject[key]}`);
//   }  we also check like this the properties of the object key

// example to copy one object to another object

const oneobject = {
    one : 1,
    two : 2,
    three : 3
}

console.log('obejct with out copy at to uppercase :', oneobject)
const secondobject = {}

for(let key in oneobject){
    const copyobject = key.toUpperCase();
    secondobject[copyobject] = oneobject[key]
}

console.log('obejct with copy and convert to uppercase :',secondobject)

console.log('-------------- For each method  ----------------');

// for each mehod design for to array throgh for each method we apply iteration to array element
// note foreach method dont have retrun statement

// syntex of foeeach method

// yourarray.forEach(function(currentvalue, index ,arr) {

// });

// its take call back function which help to iterate over the each elemnet in the array
// current value define the values in array
// index define the index of the data
// arr define the array which used to apply for each loop but its optional

const myarray2 = ['naveedsiraj', '45', 'barikotswat']

myarray2.forEach(function(currentvalue, index){
   console.log(`${index} ${currentvalue}`)
})

const people = [

    { firstName: 'Fasial', lastName: 'Imarn', birthYear: 2001 },
    { firstName: 'Naveed', lastName: 'siraj', birthYear: 2000 },
    { firstName: 'sikandar', lastName: 'shah', birthYear: 1999 }

]

people.forEach(function(currentvalue, index){
    console.log(`${index} ${currentvalue.firstName} ${currentvalue.lastName} ${currentvalue.birthYear}`)
 })