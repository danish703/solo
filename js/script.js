$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });
});

$('#services-tabs').responsiveTabs({
    startCollapsed: 'accordion'
});
$(window).on('load', function () {
    $('#isotope-container').isotope({});
    $('#isotope-filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});