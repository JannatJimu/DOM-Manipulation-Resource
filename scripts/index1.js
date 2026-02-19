// DOM manipulation

// -------------styling element
// const title = document.querySelector('#main-heading');
// title.style.color ='red';
// console.log(title);

// const listItem = document.querySelectorAll('.list-item');

// for (i=0;i<listItem.length;i++){
//     listItem[i].style.fontSize ='2rem';
//     listItem[i].style.backgroundColor='purple';
// }

// console.log(listItem);

// ------Creating Element -----
const ul =document.createElement('ul');
const li=document.createElement('li')
//----- adding element ---
ul.append(li);

// const firstListItem= document.querySelector('.list-item');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// ----Modifying text---
li.innerText='X-men';
// Modifying Attributes & classes ------
li.setAttribute('id','main-heading');

const container = document.querySelector('.container');
container.append(ul);

li.removeAttribute('id');
