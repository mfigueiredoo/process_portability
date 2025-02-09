var Scroll = {
    to : (element) => {

        if (!element) return        

        $('html, body').animate({
            scrollTop: element.offset().top
        }, 1000);
    }
}

export default Scroll