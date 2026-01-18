var userEmail = document.getElementById("userEmail")

function setUserEmail() {
    // getItem is local storage class which is used to get the key when it is set into local storage
    var email = localStorage.getItem("email")
    console.log(email)
    userEmail.innerText = email

    if (email == null) {
        window.location.href = "./login.html"
    }

}

function logout(){
    localStorage.clear()
    window.location.href = "./login.html"
}


setUserEmail()