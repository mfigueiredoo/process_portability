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

export default NavMenu