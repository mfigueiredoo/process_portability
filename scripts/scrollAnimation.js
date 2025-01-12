var Scroll = {
    to : (element) => {
        if (!element) return
        
        $('html, body').animate({
            scrollTop: element.offset().top
        }, 2000);
    }
}

export default Scroll