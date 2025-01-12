import Card from "./cards.js"
import Cookies from "./cookies.js"
import Modal from "./modal.js"
import SelectedMachineInfo from "./selectedMachineInfo.js"

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
        let machine_from = HeaderMachines.getMachineFrom()
        let machine_to = HeaderMachines.getMachineTo()

        if (machine_from) {
            $("#from-machine-add").css("display", "none")
            $("#from-machine").css("display", "block")
            updateMachine("from-machine", HeaderMachines.getMachineFrom())
        }
        else {
            $("#from-machine").css("display", "none")
            $("#from-machine-add").css("display", "block")
        }

        if (machine_to) {
            $("#to-machine-add").css("display", "none")
            $("#to-machine").css("display", "block")
            updateMachine("to-machine", HeaderMachines.getMachineTo())
        }
        else {
            $("#to-machine").css("display", "none")
            $("#to-machine-add").css("display", "block")
        }

        if (machine_from && machine_to) {
            Card.show($("#content-controls")[0], "content-controls")
        }
        else {
            Card.hide($("#content-controls")[0], "content-controls")
            Card.hide($("#content-absolute-result")[0], "content-absolute-result")
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

$('#header-clear-cookies-button').on("click", (e) => {
    if (Cookies.deleteAllCookies()) {
        HeaderMachines.update()
        SelectedMachineInfo.update("from_")
        SelectedMachineInfo.update("to_")
    }
})

export default HeaderMachines