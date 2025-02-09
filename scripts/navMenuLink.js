import Card from "./cards.js"

var NavMenuLink = {

}

//======= EVENTS =======

$("#link-portability_guide").on("click", (e) => { Card.show($("#content-for_technicians")[0], "content-for_technicians") })
$("#link-info").on("click", (e) => { /**/ })

export default NavMenuLink