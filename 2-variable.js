console.log('-------------- varibales  ----------------')
// basic varibale of js

// var , const , let


// var  globl scaope and having hoisting mean before the decleration we do some operation . and  its override the value
// we crete the multiple varible with same name using varv and its override.

var name = "naveedsiraj";

var name =  'saadkhan';

console.log(name)

// let block scope its use with in the block we cnanot reassign value to let varible if we craete with the samme name,
// a let varible not overridre the value.

let iamlet  = "iam let variable"
console.log(iamlet);
iamlet = "naveedsiraj"
console.log(iamlet);

// const varible is in es6 in const varible we store constant data which not chnage.


const mynamme =  "constant";
// mynamme = "bjbbdbcab"  it will show error we cannoit assign new value to constant varible

console.log(mynamme)

// primitive data type  thier seven primitive data type in js nn ss bb u
// nn number ,null
// string  , symbol
// boolean , big int
// u undefined

let num = Number(5665)  // number varible
console.log(typeof num);

let nullvarible = null;  // null varible

nullvarible = "my name is khan";
console.log(nullvarible)


 let stringvarible =  String('i am string varible'); // string varible

 console.log(typeof stringvarible)

 let mysymbol = Symbol('fo');

 console.log( typeof mysymbol);

 // boolean varible make a value ture or false false beacome true and true bercame false


    const istrue = true;
    const isfalse = false;
    console.log(istrue)
    console.log(isfalse)

    // big int varible its store big value

    const bignumber =  BigInt(23455213456789909876) // decleare big int and its store big value
    console.log( typeof bignumber)