$(function(){
	
	//滑动回顶部
	$('body').on('click','.btn',function(){
//		alert(1)
		 var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
	});
	
   //让按钮出现
   $(window).bind("scroll",function(){
	var top=$(this).scrollTop();//当前窗口的滚动距离
	console.log(top);
	if(top>500){
		//让回到顶部出现
		$('.btn').css('display','block')
	}else{
		$('.btn').css('display','none')
	}
	})
   
   //tab切换   
	$('.ck').click(function(){
		$(this).addClass('act');
		$('.ck').not($(this)).removeClass('act');	
		idx = $(this).index('.ck')-1;
		console.log(idx)
		if(idx==-1){
			$('.solve-list-ul-li').show();
		}else{
			$('.solve-list-ul-li').eq(idx).show();
			$('.solve-list-ul-li').not($('.solve-list-ul-li').eq(idx)).hide();
		}
		
	});
	
})	
