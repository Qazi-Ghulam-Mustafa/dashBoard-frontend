function signUp() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var userName = document.getElementById("userName")

    var nameError = document.getElementById("nameError")
    var emailError = document.getElementById("emailError")
    var passwordError = document.getElementById("passwordError")

    if (userName.value == "") {
        nameError.innerText = "PLease Enter Your User Name"
    }
    else if (userName.value.length < 5) {
        nameError.innerText = "User Name Must be greater than 5 character"
    }
    else if (userName.value.length >= 5) {
        nameError.innerText = ""
        console.log(`User Name:${userName.value} `)
    }
     if (email.value == "") {
        emailError.innerText = "Please Enter Your Email for Registration"
    }
    else if (!email.value.includes("@")) {
        emailError.innerText = "Please Enter your valid email address"
    }
    else if (!email.value.includes("@")== email.value.includes("@")) {
        emailError.innerText = ""
        console.log(email.value)
    }
     if (password.value == "") {
        password.innerText = "Please Enter Your Email password"
    }
    else if (password.value.length < 8) {
        emailError.innerText = "Password should be greater than 8 character"
    }
    else if (password.value.length >= 8) {
        emailError.innerText = ""
        console.log(`Password : ${password.value} `)
    }
}

