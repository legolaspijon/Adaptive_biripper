$(document).ready(function(){
	$(".nav a:first").css('padding-left','0px');
	$(".nav a:last").css('padding-right','0px');
	$(".linknav").hover(function(){
		$(this).css('border-bottom','2px solid #80e0b6');
	});
	$(".linknav").mouseout(function(){
		$(this).css('border-bottom','1px solid gray');
	});

	$('.linknav').each(function () {
	    var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('.active');
        }
    });






	$(window).scroll(function()
	{
	    r = $(window).scrollTop();
	    if(r < 523){
	            $('.opasity').css({ opacity : '0' });
	            $('.header').css({ position : 'absolute' });

	    }
	    if(r > 522) {
	    		$('.opasity').css({ opacity : '0.8' }); 
	    		$('.header').css({ position : 'fixed' });
	    }
	});

});