document.getElementById("submit-button").addEventListener("click", function(){
	document.getElementById("my-form").className="submitted";
});


let password = document.getElementById("first-password");

password.addEventListener("input", function () {
    let numberCheck = /[a-z]/.test(password.value);
    if (numberCheck === true) {
        document.getElementById("lowercase").style.color = "green";
    } else document.getElementById("lowercase").style.color = "black";
    
});
