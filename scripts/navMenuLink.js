import Card from "./cards.js"
import Scroll from "./scrollAnimation.js";

var NavMenuLink = {

}

//======= EVENTS =======

console.log($(".header-machines"));

$("#link-convert").on("click", (e) => { Scroll.top($(".header-machines")) })
$("#link-for_tech").on("click", (e) => { Card.show($("#content-for_technicians")[0], "content-for_technicians") })
$("#link-info").on("click", (e) => { /**/ })

export default NavMenuLink