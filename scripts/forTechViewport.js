import Scroll from "./scrollAnimation.js"

var ForTechViewport = {

}

//======= EVENTS =======

var touchStartXpos = 0
var windowRequestaAnimationFrame = undefined
var difference = 0
var speed = 1

$(".for_technicians-viewport").on("touchstart", (e) => {
    e.preventDefault()
    touchStartXpos = e.targetTouches[0].clientX + $("#for_technicians-wrapper-0001").scrollLeft()
})

$(".for_technicians-viewport").on("touchmove", (e) => {
    e.preventDefault()
    let target = e.targetTouches[0].target
    difference = e.targetTouches[0].clientX - touchStartXpos

    windowRequestaAnimationFrame = window.requestAnimationFrame(() => {
        $("#for_technicians-wrapper-0001").animate({
            scrollLeft: -difference
        }, 0);
    })
})

$(".for_technicians-viewport").on("touchend", (e) => {
    e.preventDefault()
    windowRequestaAnimationFrame = undefined
})

export default ForTechViewport