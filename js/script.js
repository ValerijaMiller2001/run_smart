$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/watch/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/watch/right.png"></button>',
        responsive: {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            },
        }
        
    });
});


