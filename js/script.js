const slider = tns({
    container: '.carousel_inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        320: {
            nav: true
        },
        575: {
            edgePadding: 5,
            gutter: 5,
            items: 1,
            nav: true
        },
        767: {
            gutter: 5,
            nav: true
        },
        991: {
            gutter: 5,
            nav: true
        },
        992: {
            nav: false,
            edgePadding: 5,
            items: 1
        },
        1200: {
            nav: false

        }
    }
});


document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});