document.getElementById("submit-button").addEventListener("click", function(){
	document.getElementById("my-form").className="submitted";
});


let password = document.getElementById("first-password");

let password2 = document.getElementById("confirm-password");

password.addEventListener("input", function () {
    let numberCheck = /[a-z]/.test(password.value);
    if (numberCheck === true) {
        document.getElementById("lowercase").style.color = "green";
    } else document.getElementById("lowercase").style.color = "black";
});

password.addEventListener("input", function () {
    let numberCheck = /[A-Z]/.test(password.value);
    if (numberCheck === true) {
        document.getElementById("capital").style.color = "green";
    } else document.getElementById("capital").style.color = "black";
});

password.addEventListener("input", function () {
    let numberCheck =/^.{8,16}$/.test(password.value);
    if (numberCheck === true) {
        document.getElementById("length").style.color = "green";
    } else document.getElementById("length").style.color = "black";
    
});

password2.addEventListener("input", function () {
    if (password.value === password2.value) {
        password2.setCustomValidity("");
    } else password2.setCustomValidity("Invalid field.");
});