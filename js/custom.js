$(document).ready(function(){
    
    $(".posit").delay(2000).fadeOut(500);

    $('.header .welcome h2').funnyText({
        speed: 700,
		borderColor: 'none',
		activeColor: 'rgba(160, 101, 12,1)',
		color: '#fff;',
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

    var typed = new Typed('.types', {
        strings: [$(".typed").text()+$(".typed").text()+$(".typed").text()],
        typeSpeed: 50,
        startDelay: 3000,
        smartBackspace: true,
        showCursor: false,
        loop: true,
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>1900){
            $('.timer1').countTo({
                form:0,
                to:250,
                speed:2000,
                refreshInterval: 10,
            });
            $('.timer2').countTo({
                form:0,
                to:150,
                speed:2000,
                refreshInterval: 10,
            });
            $('.timer3').countTo({
                form:0,
                to:4753,
                speed:2000,
                refreshInterval: 10,
            });
            $('.timer4').countTo({
                form:0,
                to:143,
                speed:2000,
                refreshInterval: 10,
            });
        }
    })

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

    (function interval(){
        $(".slider .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    interval();
                })
            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active").fadeIn(1000);
                    interval();
                })
            }
        })
    }());
    

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

    
    $(".events .event a").click(function(e){

        e.preventDefault();
        
        $('html ,body').animate({
            scrollTop:$(".event-desc").offset().top -55
        },500)
    })

    $(".navbar .bottom-navbar .res").click(function(){
        $(".navbar .bottom-navbar .links").toggleClass("display");        
    })

    function check(){
        if($(".test:first").hasClass("active")){
            $(".testimoaials .left").fadeOut();
        }
        else{
            $(".testimoaials .left").fadeIn();
        }

        if($(".test:last").hasClass("active")){
            $(".testimoaials .right").fadeOut();
        }
        else{
            $(".testimoaials .right").fadeIn();
        }
    }

    check();


    $(".testimoaials i").click(function(){
        if($(this).hasClass("right")){
            $(".testimoaials .active").fadeOut(300,function(){
                $(this).removeClass("active").next().addClass("active").fadeIn(300);
                check();
            })
        }
        else{
            $(".testimoaials .active").fadeOut(300,function(){
                $(this).removeClass("active").prev().addClass("active").fadeIn(300);
                check();
            })
        }
    })

    function checkicon(){
        if($(".news .latest-new .images:first").hasClass("active")){
            $(".news .latest-new .icon .fa-arrow-left").fadeOut();
        }
        else{
            $(".news .latest-new .icon .fa-arrow-left").fadeIn();
        }

        if($(".news .latest-new .images:last").hasClass("active")){
            $(".news .latest-new .icon .fa-arrow-right").fadeOut();
        }
        else{
            $(".news .latest-new .icon .fa-arrow-right").fadeIn();
        }
    }

    checkicon();


    $(".news .latest-new .icon i").click(function(){
        if($(this).hasClass("fa-arrow-right")){
            $(".news .latest-new .images.active").fadeOut(300,function(){
                $(this).removeClass("active").next().addClass("active").fadeIn(300);
                checkicon();
            })
        }
        else{
            $(".news .latest-new .images.active").fadeOut(300,function(){
                $(this).removeClass("active").prev().addClass("active").fadeIn(300);
                checkicon();
            })
        }
    })

    $(".option-box i").click(function(){
        $(".option-box .color-option").fadeToggle();
    })

    $(".option-box .color-option ul li").click(function(){
        $("link[href*='theme']").attr('href',$(this).attr("data-value"));
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