$("a.menu-btn").on('click',  (e) => {

    if($(e.currentTarget).hasClass('selected')) {
        $(e.currentTarget).removeClass('selected')
    }
    else {
        $(e.currentTarget).addClass('selected')
    }

})
