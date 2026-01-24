var email = document.getElementById("email");
var password = document.getElementById("password")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")
var successMessage = document.getElementById("success")





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
    var userObject = [
        //dont give space in key and value "";
        // { userEmail: "new@gmail.com", userName:"New User", password: "Abc@gmail.com" },
        // { userEmail: "new1@gmail.com", userName:"New User 1", password: "Abc@gmail.com" },
        // { userEmail: "new2@gmail.com", userName:"New User 2", password: "Abc@gmail.com" },
        // { userEmail: "new3@gmail.com", userName:"New User 3", password: "Abc@gmail.com" },
        // { userEmail: "new4@gmail.com", userName:"New User 4", password: "Abc@gmail.com" },
    ];


    if (email.value == "") {
        emailError.innerText = "Please Enter Your Email for Registration"
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter your valid email address"
    }
    else {
        emailError.innerText = ""
        console.log(email.value)
    }
    if (password.value == "") {
        passwordError.innerText = "Please Enter Your Email password"
    }
    else if (password.value.length < 8) {
        passwordError.innerText = "Password should be greater than 8 character"
    }
    else {
        passwordError.innerText = ""
        console.log(`Password : ${password.value} `)
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

        if (existUser == false) {
            emailError.innerText = "Email is not valid";
            passwordError.innerText = "Password is not valid";
        } else {
            passwordError.innerText = ""
            successMessage.innerText = "Login Successfully"
            console.log(password.value)
            // For set items into local storage we use setIems to set key and value. // (setIems is a Local Storage class)
            localStorage.setItem("login", true)
            localStorage.setItem("email", email.value)
            setTimeout(() => { window.location.href = "./dashboard.html" }, 1500)
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
    //    
    // }
}

