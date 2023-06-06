// const title=document.getElementById("main-heading")
// console.log(title)

// const lIstItem=document.getElementsByClassName("list-items")
// console.log(lIstItem)

// const container = document.querySelector("div")
// console.log(container)

// const title =document.querySelector("#main-heading")
// title.style.color='red';
// console.log(title)

// const listItems=document.querySelectorAll('.list-item')
// for(i=0;i<listItems.length;i++) {
//     listItems[i].style.fontSize="3rem";
//     style
// }
// Select the list items using a query selector
// const listItems = document.querySelectorAll('#movie-list .list-item');

// Apply the box styling to each list item
// listItems.forEach(item => {
//     item.style.display = 'inline-block';
//     item.style.border = '1px solid #ccc';
//     item.style.padding = '10px';
// });

// Wrap the entire ul element in a box
// const listContainer = document.querySelector('.list-container');
// listContainer.style.border = '1px solid #ccc';
// listContainer.style.padding = '10px';
// listContainer.style.maxWidth = '300px';
// const ul=document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li);
// li.innerText='X-men'
//modifiying attributes
// li.setAttribute('id','main-heading');
// li.removeAttribute('id')
// li.classList.add('list-item')


// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.backgroundColor= 'red';
// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)
// let ul=document.querySelector('ul')
// console.log(ul.previousSibling)
// console.log(ul.nextSibling)

//event listeners
const buttonTwo=document.querySelector('.btn-2');
function alertBtn(){
    alert('i also prem javascript');
} 
buttonTwo.addEventListener('click',alertBtn)
//mouseover
const newBackgroundColor=document.querySelector('.btn-3');

function newBgColor(){
    newBackgroundColor.style.backgroundColor='blue';
}

newBackgroundColor.addEventListener("mouseover",newBgColor);
