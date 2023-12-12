console.log('--------------IIfi function ----------------')

// iifi mean imeditely invoked function
// its run directly when we declaere it and store inside the memeory
// its help us to prevent from global scoper varible and function
// note its take function inside the the body of iifi function

// syntex of iifi function

const my_IIFI_function = (function (){
    console.log('i am iifi function')
 })();


 // lets try another exampl to add two number using iifi function

 const addtwo_numbers_using_IIfI_function = ((num1,num2)=>{
   let sum_of_numbers = num1+num2;
   return sum_of_numbers;
 })(10,10);

//  const result_of_iffi_function = ;
 console.log('sum of two numbers is :',addtwo_numbers_using_IIfI_function)

 // lets try counter example  using iffi function

 const counter = ( () => {
    let counter =0;

    function increment(){
        return counter++;
    }

    function decrement(){
        return counter--;
    }

    function reset(){
        return (counter = 0)
    }

    function display_counter  () {
    return counter;
    }

    return {
        increment: increment,
        decrement: decrement,
        reset:reset,
        display_counter:display_counter
    }
 })();

 counter.increment()
 counter.increment()
 counter.increment()
 counter.increment()
 counter.reset()


 console.log('counter values :', counter.display_counter())