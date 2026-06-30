function validateForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid Email Address");
        return false;
    }

    if(password.length < 8){
        alert("Password must contain at least 8 characters");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}



