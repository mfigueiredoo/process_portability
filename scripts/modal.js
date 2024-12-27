import InjectionMoldingMachine from "./classes/injectionMoldingMachine.js";
import Cookies from "./cookies.js";
import HeaderMachines from "./headerMachines.js";
import SelectedMachineInfo from "./selectedMachineInfo.js";

var allModalIds = [
    "modal-add"
]
var Modal = {
    clear : (modal_element, modal_id) => {
        $('#' + modal_id + "-input_machineName")[0].value = ""
        $('#' + modal_id + "-input_screwDiameter")[0].value = ""
    },
    hide : (modal_element) => {
        $(modal_element).css("display", "none")
    },
    submit : (modal_element, modal_id, slot) => {
        let machineName_input_value = $('#' + modal_id + "-input_machineName")[0].value
        let screwDiameter_input_value = $('#' + modal_id + "-input_screwDiameter")[0].value

        if (!machineName_input_value) return
        if (!screwDiameter_input_value) return

        let machine = new InjectionMoldingMachine(machineName_input_value, screwDiameter_input_value)        
        Cookies.setCookie(slot + "machine", JSON.stringify(machine), 2)

        if (Cookies.getCookie(slot + "machine") != "") {
            Modal.hide(modal_element)
            Modal.clear(modal_element, modal_id)
            SelectedMachineInfo.update(slot)
            HeaderMachines.update()
        }
    }
}


//======= EVENTS =======

allModalIds.forEach(modal_id => {
    $('#' + modal_id).on("click", (e) => {
        if ($(e.target)[0] == $(e.currentTarget)[0] || $(e.target)[0] == $("p#" + e.currentTarget.id + "-close-btn.close-btn")[0]){
            Modal.hide(e.currentTarget)
        }        
    })
    $('#' + modal_id + "-submit").on("click", (e) => {
        let modal_id = ($(e.currentTarget)[0]).getAttribute("parentModalId")
        let machineSlot = ($(e.currentTarget)[0]).getAttribute("machineSlot")
        Modal.submit($('#' + modal_id)[0], modal_id, machineSlot)
    })
});



export default Modal