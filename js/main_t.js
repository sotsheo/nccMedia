$('.slider_experience_t').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots:false,
    infinite: false,
    vertical: false,
    responsive: [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 1920,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }] 
});
$(".show_menu_mb").click(function(){
    $(this).toggleClass("active");
    $(".menu_mobile_t").toggleClass("active");
});



// burgerBtn.addEventListener('click', function() {
//   mobile.classList.toggle('navigation');
//   content_mobile.classList.toggle('active');
// }, false);

