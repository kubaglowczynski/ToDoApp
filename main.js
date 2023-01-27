const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

window.addEventListener('load', function() {
   'use strict';

   const p_array = document.getElementsByTagName("p");
   const count = p_array.length;

   //loop through a list of elements.
   for (let i = 0; i < count; i++) {

   const p = p_array[i];

   p.addEventListener("click", function() {

   p.classList.toggle("taskDone");

      })
   }
});

addTaskBtn.addEventListener('click', function (){

if(inputVal.value.trim()!=0){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
if(localItems === null){
   taskList = []
}
else{
   taskList = localItems;
}
   taskList.push(inputVal.value)
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}
inputVal.value = '';
   showItem()
})

function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
   taskList = []
}
else{
   taskList = localItems;
}


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
   

   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">Delete</button>
   </div>
   `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
   let localItems = JSON.parse(localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask(){
   
localStorage.clear()
showItem()
}