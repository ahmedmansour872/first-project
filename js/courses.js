$(document).ready(function(){
    $(".posit").delay(3000).fadeOut(1000);

    $('.header .welcome h2').funnyText({
        speed: 700,
		borderColor: 'none',
		activeColor: 'rgba(160, 101, 12,1)',
		color: 'rgb(209, 209, 209);',
		fontSize: '1.5em',
		direction: 'both'
    });
    
    $("body").niceScroll({
        cursorcolor:"rgb(160, 101, 12)",
        cursorwidth:"7px"
    });

    var typed = new Typed('.type', {
        strings: [$(".typed").text()],
        typeSpeed: 50,
        startDelay: 3000,
        smartBackspace: true,
        showCursor: false,
        loop: true,
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>800){
            $(".seroll .to-top").fadeIn(500);
        }else{
            $(".seroll .to-top").fadeOut(500);
        }
    });

    $(".seroll .to-top").click(function(){
        $("html").animate({
            scrollTop:0,
        },1000)
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>=400){
            if($(this).innerWidth()>=767 && $(this).innerWidth()<=1370){
                $(".bottom-navbar").css({
                    position: "fixed",
                    height:"70px",
                    backgroundColor:"rgba(0,0,0,0.5)",
                    marginTop:"-65px",
                    zIndex:9999,
                })
            }
        }else{
            $(".bottom-navbar").css({
                height: 0,
                zIndex: 2,
                position: "relative",
                marginTop:0,
            })
        } 

        if($(this).scrollTop()>=400){
            if($(this).innerWidth()>576  &&$(this).innerWidth()<771){
                $(".bottom-navbar").css({
                    position: "fixed",
                    height:"70px",
                    backgroundColor:"rgba(0,0,0,0.5)",
                    marginTop:"-90px",
                    zIndex:9999,
                })
            }
        }else{
            $(".bottom-navbar").css({
                height: 0,
                zIndex: 2,
                position: "relative",
                marginTop:0,
            })
        } 
            
        if($(this).scrollTop()>=400){
            if($(this).innerWidth()<=576){
                $(".bottom-navbar").css({
                    position: "fixed",
                    height:"70px",
                    backgroundColor:"rgba(0,0,0,0.5)",
                    marginTop:"-100px",
                    zIndex:9999,
                })
            }
        }else{
            $(".bottom-navbar").css({
                height: 0,
                zIndex: 2,
                position: "relative",
                marginTop:0,
            })
        } 
    })

    


    $(".navbar .bottom-navbar .res").click(function(){
        $(".navbar .bottom-navbar .links").toggleClass("display");        
    })

    $(".details .see-more ").on('click',function(){
        if($(".details .more").hasClass("hidden")){
            $(".details .see-more").each(function(){
                $(".details .more").toggleClass("hidden");
            })
            $(".details .see-more h5 i").removeClass("fa-chevron-down").addClass('fa-chevron-up');
        }else{
            $(".details .see-more").each(function(){
                $(".details .more").toggleClass("hidden");
            })
            $(".details .see-more h5 i").removeClass("fa-chevron-up").addClass('fa-chevron-down');
        }
    })

    $(".option-box i").click(function(){
        $(".option-box .color-option").fadeToggle();
    })

    $(".option-box .color-option ul li").click(function(){
        $("link[href*='theme']").attr('href',$(this).attr("data-value"));
    })

    $(".courses .head .icons i").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        
        $(".details .more-details").toggleClass("grad-view list-view")
    })

    $(".navbar .bottom-navbar .links .lin > li.Small-menu i").click(function(){

        if(!$(this).hasClass("fa-chevron-down")){
            $(this).toggleClass("fa-chevron-down fa-chevron-up");
            $(".navbar .bottom-navbar .links .lin > li.Small-menu .Small-submenu").slideUp(500);
        }else{
            $(this).toggleClass("fa-chevron-down fa-chevron-up");
            $(".navbar .bottom-navbar .links .lin > li.Small-menu .Small-submenu").slideDown(500);
        }
    })

    $(".navbar .bottom-navbar .links .lin > li.Small-menu2 i").click(function(){

        if(!$(this).hasClass("fa-chevron-down")){
            $(this).toggleClass("fa-chevron-down fa-chevron-up");
            $(".navbar .bottom-navbar .links .lin > li.Small-menu2 .Small-submenu2").slideUp(500);
        }else{
            $(this).toggleClass("fa-chevron-down fa-chevron-up");
            $(".navbar .bottom-navbar .links .lin > li.Small-menu2 .Small-submenu2").slideDown(500);
        }
    })

   
});