$('document').ready(function(){
    const windowWidth = $(window).width();
    const windowS = $(window).scrollTop();
    $('a').click(function(e){
        e.preventDefault()
    });
    commonJs();
    
    if(windowWidth<800){
        mobJs();
    } else if(windowWidth>=800){
        webJs();
    }

    $(window).resize(function(){
        if(windowWidth<800){
            mobJs();
        }//e.windowResize_M
        else if(windowWidth>=800){
            webJs();
        }
        // e.windowResize_W
        console.log(windowWidth);
        });
        
        
        function commonJs(){
            //모바일, 웹 공통
            let noticeI = 0;
            let $notice = $('.notice li');
            let $sec2_view = $('.sec2_view');
            $notice.click(function(){
                noticeI = $(this).index();
                if(noticeI<3){
                    $('.notice li a').removeClass('on');
                    $notice.eq(noticeI).children('a').addClass('on');
                    $sec2_view.removeAttr('style').removeClass('on');
                    $sec2_view.eq(noticeI).stop().fadeIn(500).addClass('on');
                }
            });
            // e.notice
        }
        // e.commonJs
        function webJs(){
            $('.gnb_txt').mouseenter(function(){
                $(this).next().stop().slideDown(300);
            });
            $('.gnb_menu_li').mouseleave(function(){
                $('.gnb_txt').next().stop().slideUp(300);
            });
            // gnb evnet
            $('.go_top').click(function(){
                $('body,html').animate({scrollTop:'0px'},1000);
            });
            // go_top

            let i = 0;
            let timing = 3000;
            let $slider = $('.slider');
            let $panel = $('.panel');
            let $panelEq = $panel.children('li');
            let panelNum = $panelEq.length;
            let timer;
            let panelAni = false;

            nextSlider(0);
            autoSlider(i);
            function slider(i){
                $('.panel>li').not('.on').css('left','100%');
                $('.panel>li.on').stop().animate({'left':'-100%'},1000,function(){
                    $(this).removeClass('on');
                });
                $('.panel>li').eq(i).stop().animate({'left':'0%'},1000,function(){
                    $(this).addClass('on');
                    panelAni=false;
                });
            }
            function nextSlider(i){
                if(!panelAni){
                    panelAni=true;
                    slider(i);
                    $('.panel>li>p').removeAttr('style');
                    $('.panel>li').eq(i).children('.panel_txt1').delay(1200).animate({'left':'375px','opacity':'1'},250,function(){
                        $(this).next().animate({'left':'435px','opacity':'1'},250,function(){
                            $(this).next().animate({'left':'435px','opacity':'1'},250);
                        });
                    });
                }
            }
            function autoSlider(i){
                timer = setInterval(function sliderAuto(){
                    if(i==panelNum-1){
                        i=0;
                    } else{
                        i++;
                    }
                    nextSlider(i);
                },timing)
            }
            // e.slider
            let loginI = 0;
            let $loginSel = $('.login_sel li');
            $loginSel.click(function(){
                loginI = $(this).index();
                $('.login_sel>li>a').removeClass('on');
                $loginSel.eq(loginI).children('a').addClass('on');
                $('ul>li>input').removeClass('active');
                $('.login_box2').children('input').eq(loginI).addClass('active');
                $('.login_box3').children('input').eq(loginI).addClass('active');
            })
            // e. loginSel
        }
        // e.webJs
        function mobJs(){
            //모바일
            let i = 0;
            let timing = 3000;
            let $slider = $('.slider');
            let $panel = $('.panel');
            let $panelEq = $panel.children('li');
            let panelNum = $panelEq.length;
            let timer;
            let panelAni = false;

            mNextSlider(0);
            mAutoSlider(i);
            function mSlider(i){
                $('.panel>li').not('.on').css('left','100%');
                $('.panel>li.on').stop().animate({'left':'-100%'},300,function(){
                    $(this).removeClass('on');
                });
                $('.panel>li').eq(i).stop().animate({'left':'0%'},300,function(){
                    $(this).addClass('on');
                    panelAni=false;
                });
            }
            function mNextSlider(i){
                if(!panelAni){
                    panelAni=true;
                    mSlider(i);
                    $('.panel>li>p').removeAttr('style');
                    $('.panel>li').eq(i).children('.panel_txt1').delay(1200).animate({'opacity':'1'},250,function(){
                        $(this).next().animate({'opacity':'1'},250,function(){
                            $(this).next().animate({'opacity':'1'},250);
                        });
                    });
                }
            }
            function mAutoSlider(i){
                timer = setInterval(function sliderAuto(){
                    if(i==panelNum-1){
                        i=0;
                    } else{
                        i++;
                    }
                    mNextSlider(i);
                },timing)
            }
            // e.mSlider
            
            $('.m_top_gnb').click(function(){
                $('.m_gnb_menu').removeAttr('style').css('display','block').stop().animate({'width':'100vw'},300);
            });
            $('.m_gnb_close').click(function(){
                $('.m_gnb_menu').slideUp();
            });
            
            let mGnbI = 0;
            let $mGnb = $('.m_gnb_menu_wrap>li');
            $mGnb.click(function(){
                mGnbI = $(this).index();
                console.log(mGnbI);
                $('.m_gnb_menu_wrap>li>a').removeClass('on');
                $mGnb.eq(mGnbI-1).children('a').addClass('on');
                $('.m_gnb_menu_wrap>li>ul').removeAttr('style').removeClass('on');
                $mGnb.eq(mGnbI-1).children('ul').fadeIn(300).addClass('on');
            });
            // e.mGnb
            
        }
    });