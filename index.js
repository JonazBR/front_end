var menu = document.getElementById("menu")
var buttom = document.getElementById("menu-dinamico")

buttom.addEventListener("click", () => {
    if(menu.classList.value == "menu_dinamico_nav") {
        menu.classList.value = menu.classList.value + " deitado"
        
    } else {
        console.log("else")
        menu.classList.value = "menu_dinamico_nav"
    }
    
})