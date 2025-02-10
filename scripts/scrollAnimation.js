var Scroll = {
    top : (element) => {

        if (!element) return

        $('html, body').animate({
            scrollTop: element.offset().top
        }, 1500);
    }
}

//======= EVENTS =======

$('.go-to-top-btn').on('click', (e) => {
    Scroll.top($(".header"))
})

export default Scroll