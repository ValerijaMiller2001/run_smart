const slider = tns({
    container: '.carousel_inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true
});


document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});


$(document).ready(function(){
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active')
          .siblings()
          .removeClass('catalog_tab_active')
          .closest('div.container')
          .find('div.catalog_content')
          .removeClass('catalog_content_active')
          .eq($(this).index())
          .addClass('catalog_content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
                $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active')
            })
        })
    };

    toggleSlide('.catalog_link');
    toggleSlide('.catalog_item_back');

}) 

