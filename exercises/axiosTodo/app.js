

// var axios = require("axios")
const baseURL = 'https://api.vschool.io/darius/todo'

// var toDo = axios.get(baseURL)

document.todo.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = document.todo

    const body = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    console.log(body)

    // axios.post('https://api.vschool.io/darius/todo/',{title: 'hello'}).then(res => {
    //     console.log(res.data)
    // })

    axios.post(baseURL, body).then((response)=>{
        console.log(response.data)
        createTodo(response.data)
    })
})

function createTodo(todo){
    console.log("im here")
    const parent = document.getElementById("wrapper")

    const container = document.createElement("div");
    container.className = "newContainer";

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = todo.title;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = todo.price;

    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("click", (e)=> updateChecked(todo._id))

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
    checkBox.addEventListener("click", (e) => deleteTodo(e, todo._id))

    container.appendChild(title)
    container.appendChild(description)
    parent.appendChild(container)
}

function updateChecked(e, id){
    console.log(id)
    console.log(e)

    const isCompleted = e.target.checked
    // the id of the todo
    // whatever we are changing(completed property)
    // {completed: Boolean}
    axios.put("https://api.vschool.io/darius/todo/"+id, {completed: isCompleted}).then((response)=>)
    console.log(response.data)
}