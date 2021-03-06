const form=document.getElementById('form');
const input =document.getElementById('input');
console.log(input);
const  todolist=document.getElementById('todolist');

const todos=JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach((todo)=>{
        addtodo(todo)
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addtodo();
})

function addtodo(todo){
    let todotext=input.value;
   
    if(todo){
        todotext=todo.text;
    }
  
   if(todotext){
     const  todoel=document.createElement('li');
     if(todo&&todo.completed){
         todoel.classList.add('completed');
     }
       todoel.innerText =todotext;
    //   todoel.innerHTML=`${todotext}  <i  id="icon" class="fab fa-twitter mr-4"></i> `
    //   const  icon=document.getElementById('icon');
      
       todoel.addEventListener('click',()=>{
           todoel.classList.toggle("completed");
           updatels();
       });  
       todoel.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
        todoel.remove();
        updatels();
    });  

       todolist.appendChild(todoel);
       input.value='';
       updatels();
   }
}
function updatels(){
    let todoel=document.querySelectorAll('li');
    const todos=[];
    todoel.forEach((todo)=>{
        todos.push({
        text:todo.innerText,
        completed:todo.classList.contains('completed')});
    });


    localStorage.setItem('todos',JSON.stringify(todos));
}
