//  get Element by Id
const title = document.getElementById('main-heading');
console.log(title);
// get element by className
const listItem= document.getElementsByClassName('list-item');
console.log('ClassName:', listItem);

// get element by tag name
const tagName= document.getElementsByTagName('li');
console.log('TagName :' ,tagName);

// querySelector ()
const container = document.querySelector('div');
console.log(container );

// querySelectorAll

const container2 = document.querySelectorAll('div');
console.log(container2)