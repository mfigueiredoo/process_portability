import Cookies from "./cookies.js"
import Modal from "./modal.js"

var updateMachine = (html_element_id, machine_cookie) => {
    if (!$(html_element_id)) return
    if (!machine_cookie) return

    $("#" + html_element_id + " .header-machines-machine-id").html(machine_cookie.name)
}

var HeaderMachines = {
    getMachineFrom : () => {
        if (Cookies.getCookie("from_machine") != "") {
            return JSON.parse(Cookies.getCookie("from_machine"))
        }
        return false
    },
    getMachineTo : () => {
        if (Cookies.getCookie("to_machine") != "") {
            return JSON.parse(Cookies.getCookie("to_machine"))
        }
        return false
    },
    update : () => {        
        if (HeaderMachines.getMachineFrom()) {
            $("#from-machine-add").css("display", "none")
            $("#from-machine").css("display", "block")
            updateMachine("from-machine", HeaderMachines.getMachineFrom())
        }
        else {
            $("#from-machine").css("display", "none")
            $("#from-machine-add").css("display", "block")
        }

        if (HeaderMachines.getMachineTo()) {
            $("#to-machine-add").css("display", "none")
            $("#to-machine").css("display", "block")
            updateMachine("to-machine", HeaderMachines.getMachineTo())
        }
        else {
            $("#to-machine").css("display", "none")
            $("#to-machine-add").css("display", "block")
        }
    }
}

//======= EVENTS =======
$('#from-machine').on("click", (e) => {
    Modal.show($("#modal-edit")[0], "modal-edit", "from_")
})
$('#from-machine-add').on("click", (e) => {
    Modal.show($("#modal-add")[0], "modal-add", "from_")
})

$('#to-machine').on("click", (e) => {
    Modal.show($("#modal-edit")[0], "modal-edit", "to_")
})
$('#to-machine-add').on("click", (e) => {
    Modal.show($("#modal-add")[0], "modal-add", "to_")
})

export default HeaderMachines