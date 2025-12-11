import { displayTodos } from "../modules/displayTodos.js";

if (!localStorage.getItem("loggedIn")) {
    alert("Please login first");
    window.location.href = "login.html";
}

async function loadTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data.slice(0, 20)); // show first 20
}

loadTodos();
