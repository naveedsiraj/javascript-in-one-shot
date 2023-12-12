console.log('-------------- object  ----------------')
// 'use strict';
// object  object in nonprimitive data type inwhich we store multiple type of data or unorderdata , also we declerare
// array , function inside object .
// inside the object their is key and  value
// key is the name of name of data  and the value is actual data

// we access the data by key weh n we console or display data


// different between object and array
// in array we store order data while in object we store unorder data
// array store the data by index whiule objuect store the data by key value
// in array we access da the data by indexvalue while in object we  access the data through the key

// syntex

//    object = {


//    }  inside curley barces we mdeclaere an object


// first object create with simple data

const myobject = {
    name:'naveedsiraj',
    age : 24,
    eduction : "bechlor in computer science"
}

console.log('display the whole object :', myobject)   // it will display the whole object

// now i want to display only specic key of object

console.log('diosplay the object eduction :', myobject.eduction) // throgh this way we display the specific value of index

// objetc lliterls  when we define the object define inside curlkey braces and define its key and values thats called object literls

const objectliterls = {
    name:'naveedsiraj',
    age : 24,
    eduction : "bechlor in computer science"
}

console.log('object literls :', objectliterls)

// Create a single object  with the new keyword its a;lso called the object constructor
// its used when de decleare a parent object and then we make a child object through new keyword and assign the value
// to parent object through the child object
// its used to create instance of object
// we access the in parent object through this key word which target the fdata we decleare pass in arugment in
// child object
// note we wanna make constructure we decleare the object inside function

// exmaple of makeing the object throgh newkeyword and acess the data throgh this keyword

 function object_without_keyword(name,age ,address,eduction) {
  this.name= name;
  this.age = age;
  this.address = address;
  this.eduction = eduction;
}

const object_with_new_keyword = new object_without_keyword('naveedsiraj',25,'manyarswat','BSCS');

console.log('we display it through the constructor function :',object_with_new_keyword)


// object create and then assign the value  its mean that when we decaler the emptuyobject and then assign the value to it
// its used when the data is coming the data from api and we dont no so we declear the empty object and then assign data

// example of crete the object and then assign the value to it

 const objet_empty_assign_value_after = {};
  console.log('empty object we assign the value after :',objet_empty_assign_value_after)
 objet_empty_assign_value_after.name = 'naveedsiraj'
 objet_empty_assign_value_after.age = '35'
 objet_empty_assign_value_after.dreamcountry = 'united kingdom'

 console.log('object now we pass some data :',objet_empty_assign_value_after);

 // update the value of object mean we declare the object and then we wanna update some data in the object

 const object_current_data = {
    name: 'saadkhan',
    age : 34,
    village:'manyar'
 }
 console.log('object withoutupdate the data is:', object_current_data )

 object_current_data.name = 'faisl Imran';
 object_current_data.age = 23;
 object_current_data.village = 'gogdra'


 // here we also delete some data from object

 const deletedata = delete object_current_data.age;

 console.log('object withupdate the data is:',object_current_data)
 console.log('delted data :', deletedata.age)

 //object with array  when we make array inside the object

 const array_iniside_object = {
    name: "Grocery Shopping",
    date: "2023-11-29",
    items: ["Apples", "Milk", "Bread", "Eggs", "Cheese"]
  };

 console.log( 'array inside object call' ,array_iniside_object.items)

 // object with function  when we make a function inside object

 const function_inside_object ={

    display_normal_function_message : function display_message(){
        console.log('i am normal  function inside the object')
    },

    display_arrow_function_message : () => {
       console.log('i am Arrow  function inside the object')
    }
 }

function_inside_object.display_arrow_function_message()
function_inside_object.display_normal_function_message()


// nested object inside object mean whe n we decleare multiple object inside object

const parentonject = {
    greenfruits : {
        one : 'mango',
        two : 'apple'
    },
    dryfruits :{
        one : 'peaunts',
        two : 'coconuts'
    },
    vegetables: {
        one :'tomato',
        two : 'potato'
    },

    displaygreenfruit :function() {
        console.log(` green fruits : ${this.greenfruits.one} , ${this.greenfruits.two}`)
    },
    displaydryfruits : function() {
        console.log(` Dry fruits : ${this.dryfruits.one} , ${this.dryfruits.two}`)
    },
    displayvegatable : function() {
        console.log(` vegetables : ${this.vegetables.one} , ${this.vegetables.two}`)
    }
}

parentonject.displaygreenfruit()
parentonject.displaydryfruits()
parentonject.displayvegatable()


// concat object   mean when we want concat two object

const conobj1 = {
    one : 1,
    two : 2,
    three : 3
}

const conobj2 = {
    four : 4,
    five : 5,
    six : 6
}

const concat_two_object = {...conobj1 , ...conobj2}

console.log('concat object =' , concat_two_object)

// object.keys() it is build in function in which the keys of object convert to array
// note only keys convert to array
// its used to search an key .
// the return type is array

// syntex  object.keys(yourobject)

// example

const object_of_key = {
    name :"naveedsiraj",
    age :89,
    school : "jinnah scol and collage",
    collage : "GHHS BAOGRAM SWAT",
    university : "university of SWAT"
}


const keys_of_object = Object.keys(object_of_key)
console.log('current object:',object_of_key)

console.log(keys_of_object)
// here we search some propertis
if(keys_of_object.includes('name')){
    console.log("The 'name' key exists in the object")
}else{
    console.log("The 'name' key not exists in the object")
}

// object.values() it is build in function in js in which the values of key convert to array
// its opposiote of keys function
// its return array in the result
// its used to search the value in the object

// syntex Object.values(your object)


const object_of_values = {
    name: "naveedsiraj",
    age: 89,
    school: "jinnah scol and collage",
    collage: "GHHS BAOGRAM SWAT",
    university: "university of SWAT"
  };

  console.log("Current object:", object_of_values);

  const values_of_object = Object.values(object_of_values);

  console.log("Values of object:", values_of_object);
  // here we search some propertis
  if (values_of_object.includes("naveedsiraj")) {
    console.log("The 'name = naveedsiraj' value exists in the object");
  } else {
    console.log("The 'name = naveedsiraj' value does not exist in the object");
  }

//   Object.entries() it is bulld in function in js in which the both key and value cnvert into array of array
//   the oppoite of object.keys and object.values
//   return array of array
//   syntex  Object.entries(your object)

  const enteriesobjectmap = {
    name: "naveeedsiraj",
    age: 23,
    edctionn: "bs cs",
    adress: "manyar swat"
  };

  const array_of_object = Object.entries(enteriesobjectmap);

  console.log(array_of_object)


// object.seal() it build in function of js in which when we appaly seal method to an object we not delete and add
// new  element in object.
// note we can update the dsata but not dlete an add
// the return type in an object but seal

// synetx  Object.seal(yourobject)

// examlple
const object_without_seal = {
    name: "Monica",
    age: 25,
    education: "Computer Science",
    address: "123 Main Street",
    occupation: "AI Assistant",
    favoriteFood: "sushi",
    favoriteColor: "purple"
  };

 const seal_object = Object.seal(object_without_seal);
 object_without_seal.name = 'naveedsiraj';  // we can update bcz seal allow to update data
//  delete object_without_seal.address;   //  it will show error we canot delete when seal
   object_without_seal.favfruit = 'mango';  // it will show error we cant add property seal
    console.log('seal object only update acceptable :',seal_object)

 //  Object.freeze () its bulid in java script when some one object is freeze we canot add delet or update data
 // the return type is object
 // note we cananot add, delete and update the data inside the freeze object

 const object_without_freeze = {
    name: "Monica",
    age: 25,
    education: "Computer Science",
    address: "123 Main Street",
    occupation: "AI Assistant",
    favoriteFood: "sushi",
    favoriteColor: "purple"
  };


  const freeze_object = Object.freeze(object_without_freeze);
  object_without_freeze.address = 'manyar swat' //it will show error we canot update when freeze()
   delete  object_without_freeze.occupation; // it will show error we canot delete when freeze()
   object_without_freeze.favoriteplace = 'kaloam' // it will show error we canot add when freeze()

  console.log('object without freeze :', object_without_freeze);


  // object destructing  object destructing mean that when we convert the ob ject data to variable is called object destructing

  const object_without_destruture = {
    name: "Monica",
    age: 25,
    education: "Computer Science",
    address: "123 Main Street",
    occupation: "AI Assistant",
    favoriteFood: "sushi",
    favoriteColor: "purple"
  };

  const object_destrcturing = {name,age,edctionn,address,occupation,favoriteFood,favoriteColor} = object_without_destruture

  console.log('object destructre :',object_destrcturing)

  // here we make a program to apply mp function on object .
  // basically the map is only design for array
  // how its possible to apply the map function to object
  // fisrt we convert object to array using object.entries() and then apply the map function to object which convert to array

  const object_convert_to_array = {
    name: "Monica",
    age: 25,
    education: "Computer Science",
    address: "123 Main Street",
    occupation: "AI Assistant",
    favoriteFood: "sushi",
    favoriteColor: "purple"
  };

  console.log('orignal object :', object_convert_to_array)

  const Array_conversion = Object.entries(object_convert_to_array)  // here we convert object to array

  console.log( 'object convert top array :',Array_conversion)

  const appaly_map_on_Array = Array_conversion.map((entries) => {  // here we apply map on array
       return [entries[0],entries[1]].toString()
  })

  console.log('finally object apply map which :',appaly_map_on_Array)