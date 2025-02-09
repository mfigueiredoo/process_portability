import NavMenu from "./navMenu.js"

var MenuButton = {

}

//======= EVENTS =======

$("#header-menu-button").on('click', (e) => {
    var masterNavMenuElem = $("#master-nav-menu")[0]

    if ($("#header-menu-button").hasClass("notEnabled")) return
    if (!$(masterNavMenuElem)) return

    if ($(masterNavMenuElem).hasClass("show")) {
        NavMenu.hide($(masterNavMenuElem), "master-nav-menu")
    }
    else {
        NavMenu.show($(masterNavMenuElem), "master-nav-menu")
    }
})

export default MenuButton