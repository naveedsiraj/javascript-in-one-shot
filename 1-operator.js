console.log('-------------- operators  ----------------')
// operator in js here we study the operator in j s

//  arthgematic operator

// + , - , / , % , *

// + addition
// - subtraction
//  / division
//  % reminder
// multification


let num1 = 2;
let num2 = 5;

let addition, subtraction , division , reminder , multification;

addition = num1+num2;
subtraction = num1-num2;
division =  num1/num2;
reminder = num2 % num1;
multification = num1 * num2;

console.log(addition)
console.log(subtraction)
console.log(division)
console.log(reminder)
console.log(multification)

// increment operator  the opertor use for to increment or decrement value
// ++ incrmenet opertor
// -- decrement operator

let incrementval =  3;

 incrementval++;

 console.log(incrementval)

 let decrementval =  3;

 decrementval--;

 console.log(decrementval)


// assigmnet operator mean operator which use for assigning value to varible
// =  for assigmnet we use only = opersator

const assignval = 3; // through = operator we assign val to varible

console.log ("assign operator val =", assignval)

 // equal operator  mean to make 2 condition equal to each other or not
// == to  make condition to check the condition eqal or not and its check only condition not type
// === to make condoition to check its equal or not and also check the type of both the condition

const conval1 = 2;
const conval2 = '2';

const condition_check_using_double_equal = conval1 == conval2; // its check only value not type

console.log("result :", condition_check_using_double_equal);


const condition_check_using_triple_equal = conval1 === conval2; // its check the condition and also type which is false

console.log("result :", condition_check_using_triple_equal)

// assignment operator with operation its used when we want  to add somne value to varible with some arthematic operation \
 // +=
 // -=
 // /=
 // *=
 // %=
 // ** = which mean power


  let value_with_arthmatic_operation = 10;
 console.log("current value :", value_with_arthmatic_operation)

   let plusequal = value_with_arthmatic_operation+=10;
   console.log("current value+=10:",plusequal)

   let subtractequal = value_with_arthmatic_operation-=10;
   console.log("current value-=10:" , subtractequal)

   let divideequal = value_with_arthmatic_operation/=2;
   console.log("current value/=2:" ,divideequal)

   let multiplyequal = value_with_arthmatic_operation*=5;
   console.log("current value*=5 :", multiplyequal)

   let modequal = value_with_arthmatic_operation%=10;
   console.log("current value%=3 :", modequal)

   let powerequal = value_with_arthmatic_operation**=3;
   console.log("current value**=3 :", modequal)


   // comparizion operator to make a realtion or comparing to condition or values

//    ==    its already explined
//    ===   its already explined
//    !=
//    !==    its alos check type
//     >
//     <
//     >=
//     <=
//     !

//   != its used when we make condition like something not equal its result is in boolean form . true or false

 let val1 = 5;
 let val2 = 3;

  const not_equalconcition = val1 != val2;   // not equal operator

  console.log(" 5 != 3", not_equalconcition)

    const greaterthencondition = val1 > val2 ;  // greater then operator

    console.log(`${val1} > ${val2}  ${greaterthencondition}`)

        const lessthencondition = val1 < val2 ;  // less then operator <

        console.log( `${val1} < ${val2}  ${lessthencondition}`)


        const greter_thenor_equal_condition = val1 >= val2 ;  // grater then or equal operator

        console.log( `${val1} >= ${val2}  ${greter_thenor_equal_condition}`)

        const Less_thenor_equal_condition = val2 <= val1 ;    // less then or equal operator


        console.log( `${val2} <= ${val1}  ${Less_thenor_equal_condition }`)

        const notcondition =val1 !=0;
        console.log(notcondition)


        // ternory operator used for to check concitiuon in one line true or false

        let value1 = 4;
        let value2 = 4;


        const result = value1 == value2 ? ` both number are eqaul ${value1} and ${value2} ` : `both number are different ${value1} and ${value2}`;

        console.log(result);

        // logical operator  its used for when  we make logic or some condition between two value if one value truecondition
        // will be true or when both condition true then result show and logical operator retyurn boolean value true or false.

        //  logical operator
        //  &&  and
        //  ||   or
        //  !    not

        // and operator  in and operator both the condition must be true then true other wise false
        let value3 = 5;
        let value4 = 5;

         const andcondition = value3!=0 && value4!=0;  //and operator

         console.log(`${value3}!=0 and ${value4}!=0   ${andcondition}`) // now the result is true both number not equal to zero

         // or operator  in or operator at least one operator became true

          const ORcondition = value3 > value4 || value3 === value4;

          console.log(`${value3} > ${value4}  ${value3} == ${value4}  ${ORcondition}`)

           const Notcondition = value3 != 0;


           console.log(` !=0: ${value3} ${Notcondition}`)