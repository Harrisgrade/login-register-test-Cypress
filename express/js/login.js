const loginButton = document.getElementById("signInBtn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const termsBox = document.getElementById("terms")
const loginForm = document.querySelector("#login");
const redirectURL = "products.html";

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(username.value == "user" 
	&& password.value == "123") {
        setFormMessage(loginForm, "success", "Success!");
	window.location.href = redirectURL;
		  	
    } else {
        setFormMessage(loginForm, "error", "Invalid username/password combination");
	}
})

termsBox.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.checked) {
      loginButton.disabled = false;
    } else {
      loginButton.disabled = true;
    }
  });



 

  