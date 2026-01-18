var email = document.getElementById("email");
var password = document.getElementById("password")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")
var successMessage = document.getElementById("success")




var userObject = [
    //dont give space in key and value ""
    { userEmail: "new@gmil.com", password: "Abc@gmail.com" },
    { userEmail: "new1@gmil.com", UserName: "New User", password: "Abc@gmail.com" },
    { userEmail: "new2@gmil.com", UserName: "New User", password: "Abc@gmail.com" },
    { userEmail: "new3@gmil.com", UserName: "New User", password: "Abc@gmail.com" },
    { userEmail: "new4@gmil.com", UserName: "New User", password: "Abc@gmail.com" },
];

function reDirect() {
    var status = localStorage.getItem("login")
    if (status) {
        window.location.href = "./dashboard.html"
    }
}

reDirect()

function login() {
    emailError.innerText = "";
    passwordError.innerText = "";
    console.log(email.value, password.value);

    if (email.value === "") {
        emailError.innerText = "Please enter your email address";

    }

    if (password.value === "") {
        passwordError.innerText = "Please enter your login password";
    }

    if (email.value !== "" && password.value !== "") {
        var existUser = false;

        for (var i = 0; i < userObject.length; i++) {
            console.log(userObject[i]); 
            // console.log(existUser);
            if (
                userObject[i].userEmail === email.value &&
                userObject[i].password === password.value
            ) {
                existUser = true;
                console.log(existUser)
                console.log(userObject[i]);
                break;
            }
        }

        if (existUser==false) {
            emailError.innerText = "Invalid email or password";
        }
    }

    // else if (email.value != userEmail) {
    //     emailError.innerText = "User are not Register"
    // }
    // else if (email == userEmail) {
    //     emailError.innerText = ""
    //     console.log(email.value)
    // }
    // else if (password.value != password) {
    //     passwordError.innerText = "Invalid Password"
    // }
    // else {
    //     passwordError.innerText = ""
    //     successMessage.innerText = "Login Successfully"
    //     console.log(password.value)
    //     // For set items into local storage we use setIems to set key and value. // (setIems is a Local Storage class)
    //     localStorage.setItem("login", true)
    //     localStorage.setItem("email", email.value)
    //     setTimeout(() => { window.location.href = "./dashboard.html" }, 1500)
    // }
}

