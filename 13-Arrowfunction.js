console.log('--------------arrow function ----------------')

// arrow function is introduced in es6
// its actullay short form of making the form
// arrow function not support this keyword
 // its make code readibale and easy
// syntex of making arrow function

// const functionname = () => {

// }

// example to make simple arrow function and call it

const myarrow_function = () => {
 console.log('i am an arrow function')
}

myarrow_function()


// arrow have two more properties implicit and explicit return

// implicict return  mean we return the result from function in one line

// explicit return mean we return the result from function

// implicit return example to add two numbers

const implicit_return = (a ,b ) => (a+b)

const result_of_addition_using_implicict_return = implicit_return(5,6)
console.log('implicit function result :' ,result_of_addition_using_implicict_return)

// in the above example we return the result in one line from function its called implicit return

// explicit return example

const explicit_return = (c,d) => {
   return c+d;
}

const result_of_addition_using_explicit_retrun = explicit_return(5,10)

console.log('explicit function result :', result_of_addition_using_explicit_retrun)

