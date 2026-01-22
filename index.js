const submitButton = document.getElementById("submit"); //submit button
const nameInput = document.getElementById("name"); //name input
const dateInput = document.getElementById("date"); //date input
const emailInput = document.getElementById("email"); //email input
const websiteInput = document.getElementById("website"); //website input
const phoneInput = document.getElementById("phone"); //phone number input
const form = document.getElementById("form"); //form element
submitButton.addEventListener("click", (e) => {
    //when submit button is clicked
    e.preventDefault(); //prevent form from submitting
    if (form.checkValidity()) {
        //if form is valid (all inputs are valid)
        alert("All inputs are valid"); //display alert
    } else {
        //if form is invalid
        const invalidFields = Array.from(
            form.querySelectorAll(".was-validated .form-control:invalid"),
        ); //get list of invalid fields
        const invalidFieldsText = invalidFields
            .map((field) => field.id)
            .join(", "); //set invalid fields as text
        alert(`The following fields are invalid: ${invalidFieldsText}`); //display alert
    }
});
