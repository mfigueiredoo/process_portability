import Cookies from "./cookies.js";

var SelectedMachineInfo = {
    update : (slotMachine) => {
        let cookieObject = JSON.parse(Cookies.getCookie(slotMachine + "machine"))
        
        if (!cookieObject) return

        $("#" + slotMachine + "-selected-machine-info-id").html(cookieObject.name);
    }
}

export default SelectedMachineInfo