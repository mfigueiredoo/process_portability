var LoadingScreen = {}   

//======= EVENTS =======

$("body").ready((event) => {   

    setTimeout(() => {
        
        $(".loading-container").addClass("fadeout")
        
        setTimeout(() => {
            $(".loading-container").removeClass("visible")
            $("body").css("overflow", "auto")
        }, 750)

    }, 500)    
    
})

export default LoadingScreen