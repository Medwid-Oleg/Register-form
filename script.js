let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
	event.preventDefault();

	let usernameValue = document.getElementById("username").value;
	let passwordValue = document.getElementById("password").value;

	console.log("username:", usernameValue);
	console.log("password:", passwordValue);
});