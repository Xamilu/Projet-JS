function showPassword() {
    let password = document.getElementById('password');
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function showPassword2() {
    let password = document.getElementById('password2');
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}





document.getElementById("inscri").addEventListener("submit", function(e){

    let erreur;

    let erreurPassword;

    let email = document.getElementById("emailAddress");

    let capsCount = 0;

    let lowCount = 0;

    let numberCount = 0;

    let password = document.getElementById("password");

    let passW = password.value;

    let character="";

    let character2="";

    let isNumber = "0123456789";

    let password2 = document.getElementById("password2");  

    let logs = [];

    logs = JSON.parse(localStorage.getItem("login")) || [];  

    for(let i = 0; i < passW.length; i++){
        character = passW[i];
        for(let k=0; k < isNumber.length; k++){
            character2 = isNumber[k];
            if(character.toUpperCase() == character & character != character2){
                capsCount++;
            }
        }
         if(character.toLowerCase() == character){
            lowCount++;
        } for(let j = 0; j < isNumber.length; j++){
            character2 = isNumber[j];
            if(character2 == character){
                numberCount++;
            }
        }
    }

    console.log(capsCount);
    console.log(lowCount);
    console.log(numberCount);

    if(capsCount > (10*(numberCount)) & lowCount > 0 & numberCount > 0){
        erreurPassword = null;
    } else {
        erreurPassword = "Le mot de passe doit contenir au moins 1 majusule, 1 minuscule et 1 chiffre"
    }
    
    if(logs.includes(email.value)){
        erreur = "Cette email est déjà utilisé.";
    }

    if(password2.value != password.value){
        erreur = "Veuillez vérifier que votre mot de passe est identique.";
    }

    if(!password2.value){
        erreur = "Veuillez véifier votre mot de passe";
    }
    
    if(!password.value){
        erreur = "Veuillez renseigner un mot de passe";
    }

    if(!email.value){
        erreur = "Veuillez renseigner un email";
    }

    if(!email.value & !password.value){
        erreur = "Veuillez renseigner un email et un mot de passe";
    }

    if(erreur) {
        e.preventDefault()
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }else {
        logs.push(email.value);
        logs.push(password.value);
        localStorage.setItem("login", JSON.stringify(logs));
    }

    if(erreurPassword) {
        e.preventDefault()
        document.getElementById("erreurPassword").innerHTML = erreurPassword;
        return false;
    }
})

