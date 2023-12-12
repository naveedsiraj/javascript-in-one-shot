
console.log('--------------  DOM SELECTOR   ----------------');

// dom   what is dom?
// answer: dom mean documnet object model its like a blue print or map through which webbrowser know webapage mean html page

// html page is actully a document inside the tagds in html page is documnet and all the page called model.

// know we know about the selector of dom

// we have 2 type of selector in js
// single element selector
// multiple element selector

// single element selector
// we can select signle element when we apply to specific tag id so we acccess like this
// we can select by id and query selector
// in id we secify the name of tag and apply the functionlity of our
// in query selctor we apply both name and symbol of the id

// example of  single element by id
 const single_element1 = document.getElementById('single_item1');

 single_element1.style.color = 'blue';

// example of single element by query selector
const single_element2 = document.querySelector('#signle_item2');

single_element2.style.color = 'red';

// multiple element selector
// we can select multiple element  when we apply to specific tag class or call by tag name or select all the element by queryselectorall
// in multipe selector we select the elements by class or tag name
// we apply the class to tag or we drectly access the tag name and apply the js operation according to our requirements

// multiple selector syntex

//  your_varibale  = document.getElementsByClassName('classname')
//  your_varibale   = document.getElementsByTagName('your tags name')
//  your_varible = document.queryselectorall('yourclass name / id name ')

// in the query selector all we specify the symbol of class  or id

// example of classname selctor

  let multiple_selector = document.getElementsByClassName('multiple_selctor');
  // the above are multiple element so we not directly get it we apply loop or map to it

  const convert_to_array = Array.from(multiple_selector);
  convert_to_array.forEach(element => {

    element.style.color= 'blue';
  });

  // in the above example we convert all the element to array and apply foreach method and change the element color to blue so all the element color chnage


  // example of tagname selector

  let tagselector = document.getElementsByTagName('h3')

  const tags_to_array = [...tagselector];

tags_to_array.map( function(tags){
    tags.style.color = 'red'
})

// in the abovge example we selcet the the tags by tag name and  convert the color form black to red 

// example of query selector bu classname

    // Select all elements with the specified class name
    let elements = document.querySelectorAll('.multiple_elemenet_queryselector_by_class');

    // Convert the NodeList to an array
    let elementsArray = Array.from(elements);

    // Use map to iterate over the array and apply styles
    elementsArray.map((element) => {
        element.style.color = 'purple';
    });

    // inner properties  meam when we take some element of html like div or some tag and we want top chnage inner text or some some operation like add, delete , and update 

   // we have 3 inner properties 
   // inner html 
   // inner content 
   // inner text

   // innner html mean we crete div or some tag in html and we wanna apply and we add some text so delete or 
   // update the innber html we difine we used inner html 
   // in simple word inside the html tag through inner html propertoies we can add, delete , update the inner text .
   // note we declere empty tag and we add some properties through js we can do it easily 

  //  example  of inner html 

  // through the inner html we get the html element and display through console 

  const text_inner_html = document.getElementById('innerhtml_text').innerHTML;

  console.log(text_inner_html);

  // throgh the inner html we add data to tag 
  const inner_html_propety = document.querySelector('.inner_html_properties')
  
  inner_html_propety.innerHTML = '<h2> i am inner text through the inner html </h2>'


 //  through the inner html we update the element and new data 
 
  // Get the element by ID
  const update_inner_html = document.getElementById('update_innerhtml');

  // Update the inner HTML content and add the new tag 
  update_inner_html.innerHTML = '<h2>I am the inner HTML text and I am updated through inner HTML</h2>';
 

  // inner text its define the text inside the html tag and we can change update , delete amd add some text 

  // example of inner text 
  const inner_text_update = document.getElementById('inner_text').innerText = 'I am the inner text te and I am updated through inner text ';