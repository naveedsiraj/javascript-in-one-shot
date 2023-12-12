console.log('-------------- math and number  ----------------')
//   math or number is a datatype in which we store numeric data like number wholenumber , float .

// decleare a number ;

let mynumber = 6;

console.log('number:',mynumber)

let myfloatnumber =  6.5;

console.log('floatnumber:',myfloatnumber)


// math function the js provide build in function to work on differnet mathematical operation in js .

//  to fixed method use for after point value we want to dispaly specific length of value we used to fixed

// its display the value after the decimal point and return the string in a result.
// it display only mess

const tofixednum =  524.1532;

const tofixed_methodt_on_num = tofixednum.toFixed(2)

console.log('to fixed value:',tofixed_methodt_on_num)


// toprecision method  same like to fixed but here the tofixed method use the roundoff numbering and show the specific value
// after the decimal point according to our requirements
// its rteturn string in a result

  const toprecsision_num = 7768.0980986;
  const toprecision_method_on_num = toprecsision_num.toPrecision(2);

  console.log(toprecision_method_on_num)


  // locale string it is the method in js througfhg which the specific number convert to specifi string representation
  // the locale string returnm string in the result

   const localestringnum = 345786
   const localestring_method_apply_tonum = localestringnum.toLocaleString();
console.log('localstring value :', localestring_method_apply_tonum)

   const mytime = '11:25Am 11/27/2023 monday'

   const timetolocalestring =  mytime.split(' ');

   console.log(timetolocalestring)


 // Math.abs chnage the negative value to absulate or positive
//  the return value of mathabs is number
 const mathabsnum = -8;

 const mathabs_method_apply = Math.abs(mathabsnum)-2;

 console.log('absolute  value ', mathabs_method_apply)

 console.log( typeof mathabs_method_apply)

// Math.round is mathfunction in which the if after the dicimal point the value is greter then 5 it will be increse
// if less then five ignore and the current value show its do roundoff opertion
// return type of math.round will be number

const math_round_value = 3.6; // less the 5 so value will be decrease and remove the point
const math_round_method = Math.round(math_round_value);
console.log(`${math_round_value} using math.round convertto:${math_round_method}`)

// Math.ceil is mathfunction in which the value alwys increase after ponit any value but wehn ponint the value be increase.
// math.ceil method return the number
const math_ceil_value =  4.1;

const ceil_method_apply =  Math.ceil(math_ceil_value);

console.log(`${math_ceil_value} using math.ceil  convertto:${ceil_method_apply}`)

// math.floor method used if any decial value then its convert to lowest value  or current value .
// math.floor reeturn the number in a result

const math_floor_value =  4.9;

const floor_method_apply =  Math.floor(math_ceil_value);

console.log(`${math_floor_value} using math.floor  convertto:${floor_method_apply}`)


// math.random its used for to genertate the numbner from 0 to 1 and its used for otp or password generating
// return type of math.random is number
// by default its generte only 0 to 1 value and we do some operation to chnage the return different type of value according
// our requirements

  const randomnumber = Math.random();  // its generation only random number from 0 to 1
  console.log(randomnumber)

  // now i want to generate the positive number

  const randomnumber_greter_then_zero =Math.floor((Math.random()*10)+1)  // floor used for to no deciaml value also we used opertion that i never return the zero
  console.log('random number > 0: ',randomnumber_greter_then_zero)

  // now i want the value generate from 1 to 10 only

  let max = 10;
  let min = 1;

  let random_number_from_one_to_ten = Math.floor((Math.random()*(max-min+1))-min)+1

  console.log('random number from 1 to 10: ',random_number_from_one_to_ten)
