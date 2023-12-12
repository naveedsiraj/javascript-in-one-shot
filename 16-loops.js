console.log('-------------- ALL LOOPS ----------------')

// loops loops in programming acctully repeat the block of code or condition according to our requiremnets
// when we repeat some code for this we use loops


// basicallly their are three types of loops
// for loop
// while loop
// do while loop

// forloop  its type of loop in which inatilization , condition , and incremenet or decremnet at the same line
// for loop syntex
// for(let yourinitilizevarible, condition , ++/--){   incremnet or decrement
//    your blok of code
// }

// example on for loop


console.log('-------------- for loop ----------------')

for(let i = 0 ;i<5 ;i++){
    console.log('i am loop and according to condition i print 5 times')
}

// the above example show the message 5 time

// another example using fr loop print table

let table_number = 4;

for(let i =1 ; i<=10;i++){
    console.log(`${table_number} x ${i} = ${table_number*i}`)
}

//  the above example printbthe table of any number  you just chnage in tablenumber

// break and contineou statement in  loop

// break statemnet used for when we want at the specific index or value  the loop run when index or value find
// ignore other code.
// its used in the loops for iteration condition

// contineuo statement used for when we want to ignore specific index and other condition run by loop so for that
// purpose we used the contineuo statemenet

// example of break statement  to print 1 to 5 number from 0 to 10

for(let i = 1; i < 10; i++ ){
    if(i == 5){
        break;
    }
    console.log(i)
}

// example on contienuo statemenet to print the even number from 0 to 10
for(let i = 1; i <= 10; i++){
    if(i%2 !== 0){
        continue
    }

    console.log('even number :', i )
}

// nested for loop  mean loop inside an ther loop which work on multi data structure
const values = [[1,2,3,4,5,6,7,8], ['naveed', 'siraj']]

// now i wanna to display with multidimentional array

for(let i = 0; i < values.length; i++ ){
    const innerArray = values[i];

    for(let j = 0; j < innerArray.length; j++){
        console.log(innerArray[j])
    }
}

// let try another exampe to print the table of 0 t0 10 using nested loop

const table_values = 10;

for(let i = 1; i<=table_values; i++ ){

    for(let j=0; j <=table_values;j++){
        let result = i * j;
        console.log(`${i} x ${j} = ${result}`)
    }
}

// while loop syntex

// let  your_varible_here

// while(condition){
//   your block of code

// ++/-- incfrement or decrement
// }

// example to print message by for loop 5 time

console.log('--------------while loop----------------')
let counter_of_loops = 0

while (counter_of_loops < 5) {
  console.log('i am while loop message and i print 5 times')

  counter_of_loops++;
}

// try another example to print table using while loop

let multiplicand = 6;
let multiplier = 1;

while (multiplier <= 10) {
  console.log(`${multiplicand} x ${multiplier} = ${multiplicand * multiplier}`);

  multiplier++;
}


const values2 = [[1,2,3,4,5,6,7,8], ['naveed', 'siraj']]

// now i wanna to display with multidimentional array using while loop

let counter_outer = 0;

while(counter_outer < values2.length){

    let inner_array = values2[counter_outer];
    let counterinner = 0
    while(counterinner < inner_array.length){
      console.log(inner_array[counterinner])

      counterinner++
    }

    counter_outer++
}

// while loop example to using break statemenet

 let counter_break = 0;

 while(counter_break <= 10){
    if(counter_break == 5){
        break;
    }

    console.log(counter_break)

    counter_break++;
 }

 const continue_statement_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 let counter_continue = 0;

 while (counter_continue < continue_statement_array.length) {
   counter_continue++; // Increment counter

   if (counter_continue % 2 == 0) {
     continue; // Skip even numbers
   }

   console.log('add number using while loop ',counter_continue);
 }

 // using while lopp to print tables from 0 t0 10


 let counter_for_outer_loop = 1;

 while (counter_for_outer_loop <= 10) {
   let counter_for_inner_loop = 1;

   while (counter_for_inner_loop <= 10) {
     console.log(`${counter_for_outer_loop} x ${counter_for_inner_loop} = ${counter_for_outer_loop * counter_for_inner_loop}`);
     counter_for_inner_loop++;
   }

   counter_for_outer_loop++;
 }

 console.log('-------------- do while loop----------------')

 // do while loop

//  do while loop

//do{

    // your code

    // ++/-- increment or decrement

//}while( condition )

// example to print messge 5 time using do while loop


let do_counter = 0;

do{
    console.log('i am messsage from do while loop and i print 5 time')
    do_counter++;
}while(do_counter < 5)

// make example to make table

let table_value_for_dowhile = 2;
let do_counter2 = 1;

do {
  console.log(`${table_value_for_dowhile} x ${do_counter2} =  ${table_value_for_dowhile * do_counter2}`)
  do_counter2++;
} while (do_counter2<=10);

const values3 = [[1, 2, 3, 4, 5, 6, 7, 8], ['naveed', 'siraj']];

let dooutercounter = 0;

do {
  let doinnercounter = 0;  // Start the inner counter from 0

  do {
    console.log(values3[dooutercounter][doinnercounter]);
    doinnercounter++;
  } while (doinnercounter < values3[dooutercounter].length);

  dooutercounter++;
} while (dooutercounter < values3.length);


// try another example top print the table of 0 t0 10 using nsted do while loop

let table_outer_counter =1;

do {

  let table_inner_counter =1;

  do{

    console.log(`${table_outer_counter} x ${table_inner_counter} = ${table_outer_counter * table_inner_counter}`)
    table_inner_counter++;

  }while(table_inner_counter <=10)

  table_outer_counter++;

} while (table_outer_counter <=10);
