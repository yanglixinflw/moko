$(function(){
	var at = setInterval(function(){
		var a = $(".index_banner .banner").height();
		$(".index_banner .but").css({'height': a});
		console.log(a);
	}, 1);
	var num = 0;
	function change_img(num){
		
		$(".index_banner .banner").eq(num).css({
			'opacity': '1',
			'z-index': '100'
		}).siblings('.banner').css({
			'opacity': '0',
			'z-index': '50'
		});
	}
	var num_news = 0;
	function change_news(num_news){
		$(".index_xinwen_con .left .left_con").eq(num_news).css({
			'opacity': '1',
			'z-index': '100'
		}).siblings('.left_con').css({
			'opacity': '0',
			'z-index': '50'
		});
		$(".index_xinwen_con .left ul li").eq(num_news).css({
			'background': 'rgba(255,255,255,0.9)',
			'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#e5ffffff,endColorstr=#e5ffffff)'
		}).siblings('li').css({
			
			'background': 'rgba(255,255,255,0.5)',
			'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#19ffffff,endColorstr=#19ffffff)'
		});
		$(".index_xinwen_con .right .right_bottom ul li a").css({
			'color': '#666'
		});
		$(".index_xinwen_con .right .right_bottom ul li a").eq(num_news).css({
			'color': '#0f88eb'
		});
	}
	change_news(0);
	change_img(0);
	$(".but .next").click(function(event) {
		if(num >= $(".index_banner .banner").length-1){
			num = 0;
		}else{
			num ++;
		}		
		change_img(num);
	});
	$(".but .prev").click(function(event) {
		if(num >0 ){
			num--;
		}else{
			num = $(".index_banner .banner").length-1;
		}
		change_img(num);
	});
	// var li=$(".index_xinwen_con .left ul li");
	// var img=$(".index_xinwen_con .left .left_con");
	// for(let i=0;i<li.length;i++){
	// 	li.eq(i).click(function(){
     //       img
	// }


	var timer_news = setInterval(function(){
		if(num_news >= $(".index_xinwen_con .left ul li").length-1){
			num_news = 0;
		}else{
			num_news ++;
		}		
		change_news(num_news);
	},3000);
	$(".index_xinwen_con .right .right_bottom ul li").mouseover(function(){
		var num_news = $(".index_xinwen_con .right .right_bottom ul li").index(this);
		change_news(num_news);
	});
	$(".index_xinwen").mouseover(function(event) {
		clearInterval(timer_news);
	}).mouseout(function(event) {
		timer_news = setInterval(function(){
		if(num_news >= $(".index_xinwen_con .left ul li").length-1){
			num_news = 0;
		}else{
			num_news ++;
		}		
		change_news(num_news);
	},3000);
	});
	
	var timer = setInterval("$('.but .next').click()",3000);
	$(".index_banner").mouseover(function(event) {
		clearInterval(timer);
	}).mouseout(function(event) {
		timer = setInterval("$('.but .next').click()",3000);
	});


})
