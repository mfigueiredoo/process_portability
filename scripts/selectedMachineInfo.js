import Cookies from "./cookies.js";

var SelectedMachineInfo = {
    update : (slotMachine) => {

        let cookieVal = Cookies.getCookie(slotMachine + "machine")

        if (cookieVal == "") {
            $("#" + slotMachine + "-selected-machine-info-id").html("•••");
            return
        }

        let cookieObject = JSON.parse(cookieVal)
        
        if (!cookieObject) {
            $("#" + slotMachine + "-selected-machine-info-id").html("•••");
            return
        }

        $("#" + slotMachine + "-selected-machine-info-id").html(cookieObject.name);
    }
}

export default SelectedMachineInfo