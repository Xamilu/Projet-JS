function showPassword() {
    let password = document.getElementById('password');
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}

let logsCheck = JSON.parse(localStorage.getItem("login"));

document.getElementById("connex").addEventListener("submit", function(e){

    let erreur;

    let email = document.getElementById("emailAddress");

    let password = document.getElementById("password");
    
    if(logsCheck.includes(email.value) & ((logsCheck.indexof(email.value) + 1 )!= password.value)){
        erreur = "Veuillez vérifier que c'est le bon mot de passe";
    } else if(!logsCheck.includes(email.value)){
        erreur = "Essayez de créer un compte car cette adresse email n'est pas energistrer";
    }
    
    if(!password.value){
        erreur = "Veuillez renseigner votre mot de passe";
    }

    if(!email.value){
        erreur = "Veuillez renseigner votre email";
    }

    if(!email.value & !password.value){
        erreur = "Veuillez renseigner un email et un mot de passe";
    }

    if(erreur) {
        e.preventDefault()
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
})