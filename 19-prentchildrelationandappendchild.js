// child and parent relation 
// here we talk about the parent and children realation of html tag and call it on js on parent and children base.
// parent children realtionshipis actually when we create a main div as a parent and inside all element inside 
// the parent div in child of parent.
// and we can access that child using child in js 
// first we call parent div and then step by step we call the child elment of parent through js 
//  when we access the parent then the child show in the array form which actually not array its actually the 
// node of the specific element.

// syntex how to get prent and children 

// syntex of call parent  your_parent_div.child

// example to access the parent and child of parent 

const parent_div = document.querySelector('.parent_div')

let children_of_parent = parent_div.childNodes;

console.log(children_of_parent);

// the above  show the div as the array of node the nodes define the target element 
// through the node we apply styling to html text 

// example to accessing the elemnet of parent throgh mode and apply some style 


let childern_node_of_parent = parent_div.children[0];
childern_node_of_parent.style.color ='red'
console.log(childern_node_of_parent);

// throgh this way we access the  specific index and applying style or applying some logic according to our requiremenets.


// note we can access the children by names also we can define as follow 
// parentdiv.firstelementchild   // its access the first element child of parent div 
// prenetdiv.lastelementchild   // its access the last element child of parent div
// lastdiv.parentelement       // its access the parent of child element


// parentdiv.firstelementchild  example 

let children_of_parent2 = document.querySelector('.parent_div_for_first_children')

let first_element_child = children_of_parent2.firstElementChild.innerHTML;
let last_element_child = children_of_parent2.lastElementChild.innerHTML;

const parent_element_of_child = children_of_parent2.parentElement;

console.log(first_element_child);
console.log(last_element_child);
console.log(parent_element_of_child)

// append child its actually a js property through which we make a new element 0r new tag throgh js 
// in the current element we call in js amd also we apply styling to new div we create.

const appendchild_div = document.querySelector('.appendchild_div');

const newelemnet_creation = document.createElement('h2')

console.log(newelemnet_creation)

newelemnet_creation.style.color = 'purple';
newelemnet_creation.style.fontSize = '50px';
newelemnet_creation.innerHTML = 'i am newly create element through append child';

appendchild_div.appendChild(newelemnet_creation);