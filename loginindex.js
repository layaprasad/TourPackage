let mail_error = document.getElementById("mail_error");
let pwd_error = document.getElementById("pwd_error");
let mailid = document.getElementById("mailid");
let password = document.getElementById("password");
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z{2,3}])?$/ ;

    function validateMail(){   

    if(mailid.value == ""){
        mail_error.innerHTML = "Email id should not be blank";
        mail_error.style.color = "red";
        mail_error.style.fontSize = "smaller";
        return false;
    }
    else if(regexp.test(mailid.value) == false){
        mail_error.innerHTML = "Email id is Invalid";
        mail_error.style.color = "red";
        mail_error.style.fontSize = "smaller";
        return false;
    }
    else if(password.value == ""){
        pwd_error.innerHTML = "Password should not be empty";
        pwd_error.style.color = "red";
        pwd_error.style.fontSize = "smaller";
        return false;
    }     
    else{
        
        return true;
    }
}

