
console.log('--------------spread and rest operators----------------')

// here we talk about rest and spred operator

// both work on array

// spread operator used for when we expand array or join some other element with array

// rest operator used for when we have multiple argument of array and we pass to function the rest operator manage
// uncountable data by single line (...)

  // return type of both depend on our logic what return type we want but botn work on the array


//   spread operartor example

const myarray1 = [1,2,3,4,5]

const addmorenumbers = [...myarray1,6,7]

const addstring = [...addmorenumbers,'naveedsiraj', 'faislimran']

console.log('current array :',myarray1)
console.log('add more numbers to array using spread :',addmorenumbers)
console.log('add mstring to array using spread :', addstring)

// in the above example we add more value to array acutully make a copy of array and add more data

// rest operator example



const restoperator_function = (...arrayofnumbers) =>{
   const addition_of_array_numbs = arrayofnumbers.reduce((total,nums) => total + nums ,0)
   return addition_of_array_numbs
}

const array_of_nums = [1,2,3,4,5,6,7,8,9,10]

const result_of_array = restoperator_function(...array_of_nums)

console.log('final result using rest and add the array value :',result_of_array)

// simple rest mean combinition and spread mean divide into parts