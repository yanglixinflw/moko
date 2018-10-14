$(function(){
	$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>=770&&s<1305){
			$(".xuanfu li").eq(1).children('a').addClass("now");
  			$(".xuanfu li").eq(1).siblings('li').children('a').removeClass("now");
		}else if(s>=1305&&s<2105){
			$(".xuanfu li").eq(2).children('a').addClass("now");
  			$(".xuanfu li").eq(2).siblings('li').children('a').removeClass("now");
		}else if(s>=2105&&s<2410){
			$(".xuanfu li").eq(3).children('a').addClass("now");
  			$(".xuanfu li").eq(3).siblings('li').children('a').removeClass("now");
		}else if(s>=2410){
			$(".xuanfu li").eq(4).children('a').addClass("now");
  			$(".xuanfu li").eq(4).siblings('li').children('a').removeClass("now");
		}else{
			$(".xuanfu li").eq(0).children('a').addClass("now");
  			$(".xuanfu li").eq(0).siblings('li').children('a').removeClass("now");
		}
	});
	$(".xuanfu li a").click(function(){
  		var a = $(".xuanfu li a").index(this);
  		$(".xuanfu li").eq(a).children('a').addClass("now");
  		$(".xuanfu li").eq(a).siblings('li').children('a').removeClass("now");
	});

})