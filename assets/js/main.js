$(document).ready(function(){
    console.log('Pronto')
    $(window).resize(function(){
        wrapperDistance()
    })

    wrapperDistance()



    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1500:{
                items:7
            }
        }
    })

})

// coloca padding em elementos sem wrapper para alinhar a grid
function wrapperDistance(){
    let distance = $('.wrapper').offset().left
    $('.wrapper-left').css('padding-left', distance + 'px')
    $('.wrapper-right').css('padding-right', distance + 'px')
}