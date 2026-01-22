var email = document.getElementById("email")
var password = document.getElementById("password")
var userName = document.getElementById("userName")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")
var successMessage = document.getElementById("success")

function signUp() {
    var userObject = [
        //dont give space in key and value ""
        // { userEmail: "new@gmail.com", UserName: "New User", password: "Abc@gmail.com" },
    ];

    if (userName.value == "") {
        nameError.innerText = "PLease Enter Your User Name"
    }
    else if (userName.value.length < 5) {
        nameError.innerText = "User Name Must be greater than 5 character"
    }
    else {
        nameError.innerText = ""
        //     console.log(`User Name:${userName.value} `)
    }

    if (email.value == "") {
        emailError.innerText = "Please Enter Your Email for Registration"
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter your valid email address"
    }
    else {
        emailError.innerText = ""
        //     console.log(email.value)
    }
    if (password.value == "") {
        passwordError.innerText = "Please Enter Your Email password"
    }
    else if (password.value.length < 8) {
        passwordError.innerText = "Password should be greater than 8 character"
    }
    else {
        passwordError.innerText = ""
        // console.log(`Password : ${password.value} `)
    }
    if (email.value !== "" && password.value !== "" && userName.value !== "") {
        var existUser = false;
        for (var i = 0; i < userObject.length; i++) {
            console.log(userObject[i]);
            if (
                userObject[i].userEmail === email.value &&
                userObject[i].password === password.value &&
                userObject[i].UserName === userName.value
            ) {
                existUser = true;
                //       console.log(existUser)
                console.log(userObject[i]);
                break;
            }
        }

        if (existUser == true) {
            emailError.innerText = "Email is already Register";
            // nameError.innerText = "";
            // passwordError.innerText = "Password is not valid";
        } else {
            userObject.push({
                userEmail: email.value,
                UserName: userName.value,
                password: password.value,
            }); 
            console.log(userObject);
            // For set items into local storage we use setIems to set key and value. // (setIems is a Local Storage class)
            localStorage.setItem("Registered Users", JSON.stringify(userObject))
            localStorage.setItem("login", true)
            localStorage.setItem("email", email.value)
            localStorage.setItem("userName", userName.value)
           // successMessage.innerText = "Registration Successful"
            setTimeout(() => {
                window.location.href = "./dashboard.html"
            }, 1500);
        }
    }

}


