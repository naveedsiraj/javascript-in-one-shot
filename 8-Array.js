console.log('-------------- array  ----------------')
 // array ita a non-primitive datatype in js its store list of varible or data and its call by refernce .
 // in array we can store same datatype varibale also different datatype varible .

     // decleration of array   with same datatype called homogenious array

 const myarray = [1,2,3,4,5,6]; // its alsom ca;led single dimentional array

 console.log('array :',myarray)

    // array specific value display:

 console.log('array 2 index call :',myarray[2]);

    // create multiple datatype array which called hetrogenious array

 const hetrogenous_array =[1,'naveed', false , 'my name is khan '];

 console.log('hertorgenious array :', hetrogenous_array);

     // specfic index i wanna display in hetrogenous array

 console.log('index 2 in hetrogenous array : ' , hetrogenous_array[3])


     // lets declerare multidimentional array in which which their is another arrays on index


 let multi_dimentional_array = [[1,2,3,4], ['a','b','c','d','e'], [true, false]]

 console.log(multi_dimentional_array)

     // display some index in index 1 array

 console.log('access zero index array  value :',multi_dimentional_array[0][2]);

    // display some index in index2 array

 console.log('access 2 index array value :',multi_dimentional_array[1][3]);

    // display some index in index3 array

  console.log('access 3 index array value :',multi_dimentional_array[2][0]);


     // array method here we discuss the array method

    // array.length  itrs find the array length mean how many elemenet in the array

 const lenght_array = [1,2,3,4,5,6,7,8,9,10]

 let find_lenght_of_array = lenght_array.length;

 console.log(`${lenght_array} length of array is  ${find_lenght_of_array}`)

 // reverse array mean we revrse the element

 const myarray2 = [1,2,3,4,5,6,7,8,9]
 console.log('current arrayt :',myarray2)
 const reverseArray = myarray2.reverse()
 console.log(`reverse  array : ${reverseArray}`)

 // array sort mean to sort the array both numerical and alphbaticallly

 // sort have two formala for numberic sorting
 // ascending   formula  = yourarray .sort((a,b) => (a-b))
 // descending  formula  = yourarray .sort((a,b) => (b-a))

const unsorttoarray1 = [7,3,4,1,2,6,9,10,8];

console.log('unsorted array = ', unsorttoarray1)

const sort_method_ascending_numbers_Array  = unsorttoarray1.sort((a,b)=> (a-b));  // sort in ascending order

console.log('sort in ascending order :' ,sort_method_ascending_numbers_Array)

// sort in descendfing order the

const unsorttoarray2 = [7,3,4,1,2,6,9,10,8];


console.log('unsorted array = ', unsorttoarray2)

const sort_method_descending_numbers_Array = unsorttoarray2.sort((a,b)=> (b-a));


console.log('sort in descending order :' ,sort_method_descending_numbers_Array)

// sort have also tow type for aplphabts
// ascedning  yourarray.sort((a,b)=> a.localecompare(b))
// descending  yourarray.sort(a,b)=> b.localecompare(a))


const unsortrarray3 = ['b','d','c','a', 'f' ,'g', 'e']

const  sort_method_ascending_alphabats_array = unsortrarray3.sort((a,b) => a.localeCompare(b))
console.log(sort_method_ascending_alphabats_array)

const unsortrarray4 = ['b','d','c','a', 'f' ,'g', 'e']

const  sort_method_descending_alphabats_array = unsortrarray3.sort((a,b) => b.localeCompare(a))
console.log(sort_method_ascending_alphabats_array)

 // aray.fill method  this method used to replace the current value of array to new dynamic values
 // its return a new array with new record
 // syntex   arr.fill(newvalue,startindex,endindex)

 const fillarray = [1,2,3,4,5,6]
 console.log('current array', fillarray)

 const fill_method_to_fillarray = fillarray.fill(2)

 console.log('updated  array using fill method :', fill_method_to_fillarray)

 // i want to change specific index using fill method

 const fill_method_tochnage_some_index = fillarray.fill(10,3,6); // through this way we change index of array using fill
 console.log(fill_method_tochnage_some_index)

 // array.join method using to join the element of array and return a string in a result.
 // note we can join the index of array also with using some chacter like , . /  etc mean we symbol to join array element

 const arrayforjoiunmethod = ['28', '11', '2023']

 const joinmethod = arrayforjoiunmethod.join('/')

 console.log('join the array elememt by / :',joinmethod);



 // array to string  method same like the join but in to string the array serparte by comma  and return string in the result
 // difference betweeen join and tostring in join we use ouur owen seperator and to sting seperate the array by comma and
 // both return string


 const arrayfortostring = ['my name is navaeeed ' , 'and i am from pakistan swat ' , 'and my eduction is BSCS']

 const tostringmethod = arrayfortostring.toString();

 console.log('result of array using tostring:',tostringmethod)

  // push () method used to add value into array  in the last index

  const arraytopushdata = [1,2,3,4,5,6,7,8]
  console.log('current push  array :', arraytopushdata)
  const pushmethod = arraytopushdata.push(9);
  console.log( 'the element in array push is :' ,pushmethod)
  console.log('the updated push method  array  : ',arraytopushdata)

   // unshift () method is used to add new value to array in gthe first index

   const arraytounshifteddata = [2,3,4,5,6,7]
   console.log( 'current unshift array :' ,arraytounshifteddata)

   const unshiftmethod =  arraytounshifteddata.unshift(1);
   console.log('the element in array unshift is :' ,unshiftmethod)

   console.log('the updated unshift method array  : ',arraytounshifteddata)

   // pop () method use to remove the data from the array
   // and its remove the last element of the array

    const poparray =  [1,2,3,4,5,6,7]
    console.log('current pop array :', poparray)
   const popmethod = poparray.pop()
   console.log('the last element remove throgh pop :' , poparray)

   // shift () method used for to remove the fisrt element of the array

   const shiftarray = [1,2,3,4,5,6,7]
   console.log('the current array without shift method apply :', shiftarray)
   const shiftmethod = shiftarray.shift()
   console.log('the shift method apply and remove first index  :' , shiftmethod)
   console.log('the updated  array shift method apply :', shiftarray)

   // concat() method is used to join 2 to more then two array
  // concat return object not array
   const conarray1 = [1,2,3,4]
   const conarray2 = [5,6,7,8]

   console.log("first array :" , conarray1)
   console.log("second array :" , conarray2)
   const concatmethod = conarray1.concat(conarray2)

   console.log(`${conarray1} concat or + ${conarray2} = ${concatmethod} `)


   // array.splice method use for when we try to add or remove the element from array

   // remove the element from array using splice
   const splice_array_removing = [1,2,3,4,5,6]
  console.log('array without splice method apply :',splice_array_removing)
   const splice_remove_method = splice_array_removing.splice(4,1)
   console.log('the updated array after remove the element through splice :', splice_array_removing)

   // add element to array using splice

   const splice_array_adding_element = [1,2,3,4,5,6]
   console.log('array without splice method apply :',splice_array_adding_element)
   const splice_add_method = splice_array_adding_element.splice(2,0,7)

   console.log('the updated array after Adding the element through splice:', splice_array_adding_element)

   // slice method use for to copy the array portion to another array or slice method return the new array
   // note not effect the orignal array just copy the portion of array

   const orignal_slice_array = ['Naveed', 'siraj' , 'manyar' , 'swat', 'pakistan']
   console.log('Orignal Array:',orignal_slice_array)
   const slice_firstname_portion = orignal_slice_array.slice(0,1).toString()
   const slice_lastname_portion = orignal_slice_array.slice(1,2).toString()
   const slice_village_portion = orignal_slice_array.slice(2,3).toString()
   const slice_district_portion = orignal_slice_array.slice(3,4).toString()
   const slice_country_portion = orignal_slice_array.slice(4,5).toString()

   // in the access the portion we also convert the index to tostring
   console.log('0 index portion first name :',slice_firstname_portion)

   console.log('1 index portion last name :',slice_lastname_portion)

   console.log('2 index portion village name :',slice_village_portion)

   console.log('3 index portion dist name :',slice_district_portion)

   console.log('4 index portion country name :',slice_country_portion)


   // array.findindex method used to find the index of some value according to ou requiremenets

   const find_value_array = [55,1,67,78,89,45,77]
   const target = 89;

   const find_value_index = find_value_array.findIndex(Element => Element === target)

   console.log('current array of find index is : ', find_value_index)
   console.log('the value we find on index is :', target);
   console.log(' the value result on index is =' , find_value_index)


   // high order array function

   // map
   // filter
   // reduce

   // map function  is high order array function in which we apply iteration on each and every element of the array
   // amd the result give us new array and also we apply some condition on the array all element
   // map function return new array in the result


     // in this example we appaly map functyion on array and x 2 with all values of array
   const map_array = [2,3,4,5,6,7,8]

    const mapfunction = map_array.map( (value) => {
      const result = value*2;

      return result;
    })

  console.log('orignal array :',map_array)

  console.log('updated  array using map and multiply 2 with all index value  :',mapfunction)

  // filter function it is high order aray function in which can do iteration on each element in array  but here
  // we can make chnages on the element of the array and  show only filter element mean the value that are true its show
  // and false one ignore.


//   in this example i want appaly filter and show the value which are odd in array so its show only odd number
//   the even number will be not display only the filter data show
   const filter_array = [1,2,3,4,5,6,7,8,9,10]

   const filter_function = filter_array.filter( function (value){
      let odd_numbers = 0;
      if(value %2 == 1){
         odd_numbers
         += value
      }
     return odd_numbers;
   })

   console.log('orignal Array of filer is :', filter_array)
   console.log('odd number in the Array :' ,filter_function)

   // reduce method is  is order array funmction in which all the array element reduce or give a reult in a sinle
   // value  eavch elemenytb iterate and the give the result in a single value .
   //  rewduce function take 2 varible currenbt value and accmultor the current value define the index value of array
   // and accmulator store the result

   // in the example below we  add all the array element from 1 to 10 inside in array and give a result in a sinbfgle v alue

   const reduce_array = [1,2,3,4,5,6,7,8,9,10]

   const reduce_method = reduce_array.reduce( (accmulator , currentvalue)  =>{
      let result =  accmulator+currentvalue;
      return result ;
   },0)

   console.log('current reduce array :', reduce_array);
   console.log('array update after reduce method appply result is :',reduce_method)

   // for each loop this loop used for the array to iteratate over all the elemenet of the array
   //  its used to display the all elelemnt of array

   const foreach_array = [1,2,3,4,5,6,7,8,9,10]
   console.log('orignal array without foreach loop:', foreach_array)
   const foreach_loop_to_array = foreach_array.forEach(element => {
    console.log('element of array display using foreach :', element)
   });

