console.log('-------------- type conversion  ----------------')
"use strict"; // its use for if we do some error using strict mode error highlight

// type conversion to convert data from one data type to another data type
// implicit data type and explicit datatype

// implicit data type by deafult the js assign some dsatatype to varible
// explicit data type  is the data type by which we  convert the type of varible to abnother



// implicit exmaple

const implicitnum = 3;
console.log('implicit number :',implicitnum)

const exlicitnum = '4';
 console.log(typeof exlicitnum + exlicitnum)
 let explicitconversion  = parseInt(exlicitnum);

 console.log(`convert type to number from string  ${typeof explicitconversion} ${exlicitnum} `)