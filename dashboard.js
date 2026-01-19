var userEmail = document.getElementById("userEmail")
var userName = document.getElementById("userName")
function setUserEmail() {
    // getItem is local storage class which is used to get the key when it is set into local storage
    var email = localStorage.getItem("email")
    console.log(email)
    var name = localStorage.getItem("userName")
    console.log(name)
    userName.innerText = " " +name
    userEmail.innerText = email

    if (email == null) {
        window.location.href = "./login.html"
    }

}

function logout() {
    localStorage.clear()
    window.location.href = "./login.html"
}


setUserEmail()