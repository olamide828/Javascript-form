console.log("Hello World");

const form = document.querySelector("#form");
const Username = document.querySelector("#name");
const Password = document.querySelector("#password");
const Email = document.querySelector("#email");
const username = /^[a-zA-z0-9_]+$/;
const password = /^[a-zA-Z0-9_]+$/;
const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



form.addEventListener("onsubmit", function (e) {
	// body...
	e.preventDefault();

	if (Username.value.trim() === "") {
		return;
	}

	if (username.test(Username.value.trim())) {
		console.log("Valid username");
	} else {
		console.log("invalid username");
	};


	if (Email.value.trim()=== "") {
		return;
		alert("email cannot be empty")
	}

	if (email.test(Email.value.trim())) {
		console.log("valid email");
	} else {
		console.log("invalid email");
	};


	if (Password.value.trim() === "") {
		return;
	};

	if (Password.value.trim().length > 12) {
		alert("Password cannot be longer than 12");
		console.log("invalid password");
	} else if (Password.value.trim() .toLowerCase() === "password") {
		alert("Password cannot be 'password'");
		console.log("Invalid Password");
	} else if (password.test(Password.value)) {
		console.log("valid password");
	} else {
		console.log("invalid password");
	};
});


