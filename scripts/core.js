import HeaderMachines from "./headerMachines.js";
import LoadingScreen from "./loadingScreen.js";
import NavMenu from "./navMenu.js";
import SelectedMachineInfo from "./selectedMachineInfo.js";


const pageAccessedByReload = (
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
    .getEntriesByType('navigation')
    .map((nav) => nav.type)
    .includes('reload')
);

if (pageAccessedByReload) { $("html, body").animate({ scrollTop : 0 }, 250) }

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