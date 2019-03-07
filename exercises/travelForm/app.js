//create form variable
var form = document.travelForm

//how to submit form
form.submit.addEventListener("click", function(e){
    e.preventDefault()
    var dietArr = []
    if (form.vegetarian.checked){
        dietArr.push("Vegetarian")
    }
    if (form.lactose.checked){
        dietArr.push("Lactose")
    }
    if (form.peanut.checked){
        dietArr.push("Peanut Allergy")
    }

    alert(`
    First Name: ${form.firstName.value}
    Last Name: ${form.lastName.value}
    Age: ${form.age.value}
    Gender: ${form.gender.value}
    Location: ${form.location.value}
    Dietary Restrictions: ${dietArr.join(", ")}
    `)
})
