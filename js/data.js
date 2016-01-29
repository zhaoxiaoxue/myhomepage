$(function() {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    var $timeline_block = $('.cd-timeline-block');

    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });

    var arr=[];
    var slientW=document.documentElement.offsetWidth;
    var slientH=document.documentElement.offsetHeight;
    for(var i=0;i<50;i++){
        var lefts=10+(slientW-40)*Math.random();
        var div=document.createElement('div');
        div.innerHTML='&#xe601;';
        var time=50*Math.random();
        var deg=360*Math.random();
        var daxiao=Math.floor(24+30*Math.random());
        div.style.cssText='font-family:iconfont;font-size:'+daxiao+'px;position:absolute;top:-40px;left:'+lefts+'px;color:#fff';
        div.style.transition='top ease-in '+time+'s';
        div.style.transform='rotate('+deg+'deg)';
        document.body.appendChild(div);
        arr.push(div);
    }
    setTimeout(function(){
        for(var i=0;i<arr.length;i++){
            arr[i].style.top=slientH+'px';
            arr[i].addEventListener('webkitTransitionEnd',function(){
                this.style.transition='none';
                this.style.top='-40px';
                var that=this;
                setTimeout(function(){
                    time=5*Math.random();
                    that.style.transition='top ease-in '+time+'s';
                    that.style.top=slientH+'px';
                },0)
            },false)
        }
    },0)
    $('.cd-timeline-content img').hover(function(){
        $(this).css({
            transition:"transform 1s ease",
            transform:"scale(1.4,1.4)"
        })
    },function(){
        $(this).css({
            transition:"transform 1s ease",
            transform:"scale(1,1)"
        })
    });
});


$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
