import Scroll from "./scrollAnimation.js";

var NavMenu = {
    show : (navmenu_element, navmenu_id) => {
        if ($(navmenu_element).hasClass("show")) {
            setTimeout(() => {
                $(navmenu_element).removeClass("show");
            }, 10);
        }

        setTimeout(() => {
            $(navmenu_element).addClass("show")
        }, 10);

        
        Scroll.top($(navmenu_element))
        window.location = "#master-nav-menu"

    },
    hide : (navmenu_element, navmenu_id) => {
        if ($(navmenu_element).hasClass("show")) {
            setTimeout(() => {
                $(navmenu_element).removeClass("show");
            }, 10);
        }

        setTimeout(() => {
            $(navmenu_element).addClass("hide")
        }, 10);

        setTimeout(() => {
            $(navmenu_element).removeClass("hide")
        }, 750);

        //window.location = "#"

    } 
}

//======= EVENTS =======

$("body").on("click", (e) => {    

    if ($(e.target)[0] == $(".nav-menu")[0]) return
    if ($(e.target)[0] == $(".menu-button")[0]) return    
    if (($(e.target)[0] != $(".nav-menu")[0]) && $(".nav-menu").hasClass("hide")) return

    if (($(e.target)[0] != $(".nav-menu")[0]) && $(".nav-menu").hasClass("show")) 
        NavMenu.hide($(".nav-menu")[0], "nav-menu")

})

export default NavMenu