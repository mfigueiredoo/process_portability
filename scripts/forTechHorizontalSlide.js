var ForTechHorizontalSlide = {

}

//======= EVENTS =======

var windowRequestaAnimationFrame = undefined
var touchStartXpos = 0
var direction = 1
var distance_per_frame = 0
var difference = 0
var speed = 0.15

var touchend_smooth_scroll = () => {
    distance_per_frame -= speed

    if(distance_per_frame <= 0) {         
        distance_per_frame = 0   
        windowRequestaAnimationFrame = undefined
        return
    }

    console.log(distance_per_frame);

    $("#for_technicians-wrapper-0001").animate({
        scrollLeft: $("#for_technicians-wrapper-0001").scrollLeft() + (distance_per_frame * direction)
    }, 0);

    windowRequestaAnimationFrame = window.requestAnimationFrame(touchend_smooth_scroll)

}

$(".for_technicians-wrapper").on("touchstart", (e) => {
    // e.preventDefault()
    touchStartXpos = e.targetTouches[0].clientX + $("#for_technicians-wrapper-0001").scrollLeft()
    direction = 1
    distance_per_frame = 0
    difference = 0
})

$(".for_technicians-wrapper").on("touchmove", (e) => {
    e.preventDefault()
    windowRequestaAnimationFrame = window.requestAnimationFrame(() => {
        direction = difference > (e.targetTouches[0].clientX - touchStartXpos) ? 1 : -1
        distance_per_frame = Math.abs(difference - (e.targetTouches[0].clientX - touchStartXpos))
        difference = e.targetTouches[0].clientX - touchStartXpos

        $("#for_technicians-wrapper-0001").animate({
            scrollLeft: -difference
        }, 0);
    })
})


$(".for_technicians-wrapper").on("touchend", (e) => {
    windowRequestaAnimationFrame = undefined
    touchend_smooth_scroll()
})

export default ForTechHorizontalSlide