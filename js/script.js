$(document).ready(function(){

    $(".top-btn").click(function(){
        $("html,body").animate({scrollTop : 0}, 500)
    })

    $(".slide-box").slick({
        arrows: false ,
        slidesToShow:4 ,
        slidesToScroll: 1,
        infinite: false ,
        swipe:  true ,
        swipeToSlide: true ,
    })

    $(".arrows-btn .prev-btn").click(function(){
        $(".slide-box").slick('slickPrev')
    })

    $(".arrows-btn .next-btn").click(function(){
        $(".slide-box").slick('slickNext')
    })

});

$(window).scroll(function(){
    var $scrollTop = $(this).scrollTop();

    if($scrollTop >= 800){
        $(".top-btn").addClass("active")
    } else{$(".top-btn").removeClass("active")}

});
