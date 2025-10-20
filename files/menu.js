document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    
    // Insère le menu toggle avant le premier enfant du body
    document.body.prepend(menuToggle);
    
    const nav = document.querySelector("nav");
    
    if (nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
});