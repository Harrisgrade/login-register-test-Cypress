const form = document.getElementById('form');
const errorMsg = document.getElementById('errormsg');
const loginButton = document.getElementById('signInBtn');
const username = document.getElementById('user');
const password = document.getElementById('password');
const termsBox = document.getElementById('terms');
const redirectURL = 'homepage.html';

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-custom error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-custom success';
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (username.value == 'user' && password.value == '123') {
		window.location.href = redirectURL;
	} else {
		setErrorFor(errorMsg, 'Invalid Username/Password Combination');
	}
});

termsBox.addEventListener('change', (e) => {
	e.preventDefault();
	if (e.target.checked) {
		loginButton.disabled = false;
	} else {
		loginButton.disabled = true;
	}
});
