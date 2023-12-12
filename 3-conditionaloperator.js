console.log('-------------- conditional operator  ----------------')
 // conditional operator conditional operator used when we want we have different condition or different block of computed
 // and we want to show speciof record so we used conditional statement and its return boolean value true or false.

  // conditional statmemet
  // if
  // if else
  // if else if
  // ternory operator inline conditional  stamenet
  // switch statement

  // if statement its used when we check only one condition

   const if_condition_num = 2;
   const else_condition_num = 3;
   const if_else_ifcondition = 'dcjnx';

   if(if_condition_num %2 === 0 ){  // its only if condition only check single condition
    console.log(`${if_condition_num } is even`)
   }

//    if -else  is used to check multiple condition

  if(else_condition_num %2 ===0 ){   // here we  make condition for both if and else statement
    console.log(`${else_condition_num } is even`)
  }else{
    console.log(`${else_condition_num } is odd`)
}

// if else if condition its check uncountable condition according to our requurement

 if(if_else_ifcondition %2 === 0){
    console.log(`${if_else_ifcondition } is even`)
 }else if(if_else_ifcondition %2 == 1){
    console.log(`${if_else_ifcondition } is odd`)
 }else if(if_else_ifcondition < 0){
    console.log(`${if_else_ifcondition } is Negative `)
 }else{
    console.log(`${if_else_ifcondition } is not valid number `)
 }

 // switch statement in js its also used for to execute the specif block of code when logic became true and switch statement
 // always used for when we have multiple statement to execute.
 // switch statement used for mulltiple condition not for single condoition


   const number1 = 16;
   const number2 = 6;
   const operation = '%';
   let arthematicresult = 0

 switch (operation) {
   case "-":
       arthematicresult = number1-number2;
       console.log(arthematicresult)
      break;
  case "+":
      arthematicresult = number1+number2;
      console.log(arthematicresult)
   break;
   case "/":
      arthematicresult = number1/number2;
      console.log(arthematicresult)
   break;
   case "*":
      arthematicresult = number1*number2;
      console.log(arthematicresult)
   break;
   case "%":
      arthematicresult = number1%number2;
      console.log(arthematicresult)
   break;
   default:
      console.log('unvalid operator')
      break;
 }