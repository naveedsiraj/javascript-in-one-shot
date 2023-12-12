console.log('-------------- function  ----------------')
// function i like  backbone of javascript prograaming
// function is block of code  which perfrom specifc task when need
// its allow us the code reusabilty just insimple called the function and reused the code
// its divide the complex task into a small chaks or parts

// Actually inside the  function body we make some code and when ever we want that specific block code we jsut call it
// and use it its give us the reusablity of code.

//syntex of decleartoion of function

// function keyword   name of function brackets amd boduy of functiom


//   function nameofyourfunction (){
    //    insde this write your code of logic
//   }

//    nameofyourfunction()  it is call to function
// you can call the name of function   function name and () braces

// Function keyword
// Name   give the name to your function
// ()    function syntax
// {} body of function inside function we write our logic


// write a simple function wheich disply the message when call

function displaymessage (){
    console.log('when call message Display : i am function')
}

displaymessage()


// function with parameter mean we pass the parameter in called time and we pass the value to function inside
// braces  and also pass to function body as argument and call it do some operation according to our need

 function withparameter(val1,val2){
  const addnumbers = val1+val2;
  console.log(` paremter pass resutlt: ${val1} + ${val2} = ${addnumbers}`)
 }
const n1 = 5;
const n2 = 10;
 withparameter(n1,n2)


 // retrun statement in function  when we want to print some result out side function in call time we use return statement
 // when call the function we console the function call not the code inside the code of function

 // lets try the above example of paremetr and we apply the return statemnet to function and display the result out side
 // function

 function withparameter_and_return_statement(val1,val2){
    const addnumbers = val1+val2;
      return addnumbers;
   }
  const n3 = 5;
  const n4 = 10;
  let sum_of_numbers = withparameter_and_return_statement(n3,n4)
  console.log(` retrun statemenet  resutlt: ${n1} + ${n2} = ${sum_of_numbers}`)

  // note that when we console both in function code and also console the function it will show undefined in the browser
  //  try example of undefined error

  function error_undefined_message () {
    const messsage = 'undefined message'
    console.log(messsage)
  }

  const result2 = error_undefined_message();
  console.log(result2)

  // so the above example will show the undefined message
  // solutions1 when you console inside function its not neeed to console the the function call
  // solution2  when you use return then don't console inside function console the function call
  // when  you follow youuse the above two rules you can avoid the undefined error using function

  //   array with function  mean when we pass array to function and do some operation
  // example of array from 0 to 10 and we find the even and odd number

  function array_to_find_even_and_odd_number (numbersarray) {
      const evennumbers = [];
      const oddnumbers = [];

      numbersarray.filter(function(value){
         if(value %2 === 0){
            evennumbers.push(value)
         }else{
            oddnumbers.push(value)
         }
      })
      console.log('Orignal Array:',numbers_array)
      console.log('Even Numbers:', evennumbers)
      console.log('Odd Numbers:', oddnumbers)

  }

  const numbers_array = [1,2,3,4,5,6,7,8,9,10]

  array_to_find_even_and_odd_number(numbers_array)

//   object with function mean when we pass object to function

function passobjecttofunction(parameters) {
  console.log(parameters)
}

const personinformation = {
    person_name: "saadkhan",
    person_age: 20,
    person_Email: "saadkhan2345@gmail.com",
    person_Address: "ManyarSwat"
};

passobjecttofunction(personinformation)

//  real life exmple to passs object to function and do some operation on the object data


function calculate_totalamount(record){

    indidual_total = record.items.map(item =>{
        const itemstotal = item.price * item.quantity;
      return `${item.name} + ${item.price} x ${item.quantity} = ${itemstotal}`;

    })

  const totoal = record.items.reduce((total, item)=>{
       return total+item.price*item.quantity;
    },0)

    return {totoal, indidual_total}
}

const shoppingdataone = {
  items : [
    { name : 'apple' , price:200 , quantity:2 },
    { name : 'orange' , price:250 , quantity:2 },
    { name : 'graphs' , price:350 , quantity:1 }
  ]
}

 const fruit_total_balance = calculate_totalamount(shoppingdataone)
console.log(fruit_total_balance.indidual_total.toString())
 console.log('Final totaol:',fruit_total_balance.totoal)