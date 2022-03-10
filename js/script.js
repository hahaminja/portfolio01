$(document).ready(function(){
    // 상단메뉴
   $(".menu-box > li").mouseenter(function(){
        var thisIndex = $(this).index()

        $(".nav-2-depth > .content").removeClass("active");
        $(".nav-2-depth > .content").eq(thisIndex).addClass("active");
        $(".nav-2-depth-wrap").addClass("active");
    })
    $(".menu-box > li").mouseleave(function(){
         var thisIndex = $(this).index()
 
         $(".nav-2-depth > .content").eq(thisIndex).removeClass("active");
         $(".nav-2-depth-wrap").addClass("active");
     })

    $(".nav-2-depth > .content").mouseenter(function(){
        $(this).addClass("active");
    })
    $(".nav-2-depth > .content").mouseleave(function(){
        $(this).removeClass("active");
    })
    
    //탑버튼_위로올라오기
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
    //슬라이드 좌우버튼
    $(".arrows-btn .prev-btn").click(function(){
        $(".slide-box").slick('slickPrev')
    })

    $(".arrows-btn .next-btn").click(function(){
        $(".slide-box").slick('slickNext')
    })

})

//스크롤버튼 800px 나타나기
$(window).scroll(function(){
    var $scrollTop = $(this).scrollTop();

    if($scrollTop >= 800){
        $(".top-btn").addClass("active")
    } else{$(".top-btn").removeClass("active")}

})
