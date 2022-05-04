
 var inputDay ="1/1/2023";

 const daysEl=document.getElementById('days');
 const hoursEl=document.getElementById('hours');
 const minsEl=document.getElementById('mins');
 const secondsEl=document.getElementById('seconds');
 
 function countDown(){
     const currentDay =new Date();
     const countdownDay =new Date(inputDay);
     const totalSeconds=(countdownDay-currentDay)/1000;
 
     const days=Math.floor((totalSeconds/3600/24));
     const hours=Math.floor((totalSeconds/3600)%24);
     const mins=Math.floor((totalSeconds/60)%60);
     const seconds=Math.floor((totalSeconds)%60);
 
     daysEl.innerHTML=days;
     hoursEl.innerHTML=formatTime(hours);
     minsEl.innerHTML=formatTime(mins);
     secondsEl.innerHTML=formatTime(seconds);
 
 };
 function formatTime(time){
     return time<10 ? (`0${time}`): time;
 };
 
 
 
 // hoursEl.innerHTML=formatTime(hours);
 // minsEl.innerHTML=formatTime(mins);
 // secondsEl.innerHTML=formatTime(seconds);
  
 // };
 
 // function formatTime(time){
 //  return time <10 ? (`0${time}`):time;
 // }
 
 
 
 countDown();
 
setInterval(countDown,1000)
 
 const btn1 = document.getElementById('btn1');
 const words=document.getElementById('words');
 btn1.onclick = function(){
     words.innerHTML = prompt("Input words")
 };
 
 const btn2 = document.getElementById('btn2');
 btn2.onclick = function(){
     inputDay = prompt("Input countdown date")
 };


//  const btn3 = document.getElementById('btn3');
//  var url = "";
//  btn3.onclick = function(){
//      url = prompt("Input image link")
//  };


 

 //设置左侧todo-list的显示
 const nav1 = document.getElementById('nav1');
 const nav2 = document.getElementById('nav2');
var flag = false

//设置点击依次显示
nav1.onclick = function(){
    if(flag){
        nav2.style.display = "none";
        flag = false;
    }else{
        nav2.style.display = "block";
        flag = true;
    };
}
    

//设置todo-list的具体内容效果
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

const btn3 = document.getElementById('btn3');
 btn3.addEventListener("click", () => {
    todosUL.innerHTML = "";
    updateLS();
});

