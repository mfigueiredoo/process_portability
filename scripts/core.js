import HeaderMachines from "./headerMachines.js";
import NavMenu from "./navMenu.js";
import SelectedMachineInfo from "./selectedMachineInfo.js";

HeaderMachines.update()
SelectedMachineInfo.update("from_")
SelectedMachineInfo.update("to_")

$(window).on("popstate", (e) => {
    
    var masterNavMenuElem = $("#master-nav-menu")[0]

    if (!$(masterNavMenuElem)) return


    if ($(masterNavMenuElem).hasClass("hide")) {
        return
    }

    if ($(masterNavMenuElem).hasClass("show")) {
        NavMenu.hide($(masterNavMenuElem), "master-nav-menu")
    }
})