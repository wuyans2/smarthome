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
   
	
})