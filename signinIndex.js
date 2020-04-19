let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let address = document.getElementById("address");
let zip = document.getElementById("zip");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
// let cpwd = document.getElementById("cpwd");
let mobile = document.getElementById("mobile");
let errorName = document.getElementById("errorName");
let errorZip = document.getElementById("errorZip");
let errorMail = document.getElementById("errorMail");
let password_strength = document.getElementById("password_strength");
// let errorCpwd = document.getElementById("errorCpwd");
let errorMob = document.getElementById("errorMob");

let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z{2,3}])?$/ ;
let zipExp = /^[0-9]{6}?$/;
let mobexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;



// function validate(){
//     return( validateSignup() && CheckPasswordStrength());
// }

function validateSignup(){
    
    if(fname.value == "" || lname.value == ""){
        errorName.innerHTML = "First Name and Last name is mandatory";
        errorName.style.color = "red";
        errorName.style.fontSize = "smaller";
        return false;
    }    
    else if(zip.value == ""){
        errorZip.innerHTML = "Zip is mandatory";
        errorZip.style.color = "red";
        errorZip.style.fontSize = "smaller";
        return false;
    }
    else if(zipExp.test(zip.value) == false){
        errorMob.innerHTML = "Zip is Invalid";
        errorMob.style.color = "red";
        errorMob.style.fontSize = "smaller";
        return false;
    }
    else if(email.value ==""){
        errorMail.innerHTML = "Email should not be empty";
        errorMail.style.color = "red";
        errorMail.style.fontSize = "smaller";
        return false;
    }
    else if(regexp.test(email.value) == false){
        errorMail.innerHTML = "Email id is Invalid";
        errorMail.style.color = "red";
        errorMail.style.fontSize = "smaller";
        return false;
    }
    
    else if(mobile.value ==""){
        errorMob.innerHTML = "Mobile number is mandatory";
        errorMob.style.color = "red";
        errorMob.style.fontSize = "smaller";
        return false;
    }
    else if(mobexp.test(mobile.value) == false){
        errorMob.innerHTML = "Mobile Number is Invalid";
        errorMob.style.color = "red";
        errorMob.style.fontSize = "smaller";
        return false;
    }
    else {
        return true;
    }
}

function CheckPasswordStrength() {
    // var pwd = document.getElementById("pwd");

    if (pwd.value.length <= 8) {
        password_strength.innerHTML = "password should not be blank or less than 8";
        password_strength.style.color = "red";
        password_strength.style.fontSize = "smaller";   
        return false;
    }
    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {

        if (new RegExp(regex[i]).test(pwd.value)) {
            passed++;       
        }
    }
    
    //Validate for length of Password.
    if ((passed > 2) && (pwd.value.length >= 8)) {
        passed++;
    }
    else{
        return false;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:          
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;

}
