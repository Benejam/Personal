$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

document.getElementById("contactForm").addEventListener("change", function(){
    var regExpOnlyLetters = /^[A-Z]+$/i;
    var userName = document.getElementById("name").value;
    if(!regExpOnlyLetters.test(userName)){
        document.getElementById("nameValidate").innerHTML = "El nombre no puede contener números o signos";
        document.getElementById("nameValidate").classList.add("noValid");
        document.getElementById("name").focus();
    }

    var regExpMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var userMail = document.getElementById("email").value;
    if(userMail.length != 0){
        if(!regExpMail.test(userMail)){
            document.getElementById("emailValidate").innerHTML = "El e-mail no es valido";
            document.getElementById("emailValidate").classList.add("noValid");
            document.getElementById("email").focus();
        }
    }
});

function validate(){
    var error = 0;
    var userName = document.getElementById("name").value;
    var userMail = document.getElementById("email").value;
    if (userName == ""){
        document.getElementById("nameValidate").innerHTML = "Escriba su nombre.";
        document.getElementById("nameValidate").classList.add("noValid");
        document.getElementById("name").focus();
        error++;
    }
    if(userMail == ""){
        document.getElementById("emailValidate").innerHTML = "Indique un e-mail valido.";
        document.getElementById("emailValidate").classList.add("noValid");
        document.getElementById("email").focus(); 
        error++;
    }
   var userPhone = document.getElementById("phone").value;
    if(userPhone.length != 0){
        var regExpPhone = 9 && /^[679]{1}[0-9]{8}$/;
        if(!regExpPhone.test(userPhone)){
            document.getElementById("phoneValidate").innerHTML = "Indique un número de teléfono valido.";
            document.getElementById("phoneValidate").classList.add("noValid");
            error++;
        }
    }
    else{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("book").value = "";
    }
    
    if(error==0)return true;
    else return false;
} 

