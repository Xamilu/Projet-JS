document.getElementById("Choisir_profil").addEventListener("submit", function(a) {

        let utilisateur = document.getElementById("user");

        localStorage.setItem("Pseudo profil", utilisateur.value);

});

document.querySelector("#image_profil").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    })

    reader.readAsDataURL(this.files[0]);

});

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if (recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("scr", recentImageDataUrl);
    }
});



/*
document.getElementById("Choisir_profil").addEventListener("CHECKBOX", function(d) {
    
    let parent = document.getElementById("checkbox_parent");
    let enfant = document.getElementById("checkbox_enfant");

    localStorage.setItem("parent", util.parent);    
    localStorage.setItem("enfant", util.enfant);  

})
*/
