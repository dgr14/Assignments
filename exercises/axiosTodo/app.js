

// var axios = require("axios")

var toDo = axios.get("https://api.vschool.io/darius/todo")

document.todo.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.todo.title.value;
    const description = document.todo.description.value;
   

    const body = {
        title,
        description 
    }

    axios.post(url, body).then((response)=>{
        console.log(response.data)
    })
})

function createTodo(todo){
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = todo.title;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description;
}