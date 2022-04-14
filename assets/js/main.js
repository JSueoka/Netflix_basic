$(document).ready(function(){
    console.log('Pronto')
    $(window).resize(function(){
        wrapperDistance()
    })

    wrapperDistance()
})

// coloca padding em elementos sem wrapper para alinhar a grid
function wrapperDistance(){
    let distance = $('.wrapper').offset().left
    $('.wrapper-left').css('padding-left', distance + 'px')
    $('.wrapper-right').css('padding-right', distance + 'px')
}