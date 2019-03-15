const axios = require("axios");

const newTodo = {
    description: "we wrote some code"
}

axios.get("" , newTodo).then((response) => {
    console.log(response)
})

// axios.put()
// axios.delete()
// axios.post()

