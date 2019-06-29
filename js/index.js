$(function() {
//滑动回顶部      
	$(".btn").click(function () {
        var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
   });
   
	//水平轮播自动
	var num = 0;
		setInterval(function(){
			console.log(window.innerWidth)
			   num++;
			  	if(window.innerWidth>992){
				   	if(num>5){
						num = 0;
						$('.fox ul').css({'left':-25*num+'%'});
						num=1;
					}
					$('.fox ul').stop().animate({'left':-25*num+'%'})
			   }
			   if(window.innerWidth> 768 && window.innerWidth< 992){
					if(num>5){
						num = 0;
						$('.fox ul').css({'left':-33.33*num+'%'});
						num=1;
					}
					$('.fox ul').stop().animate({'left':-33.33*num+'%'})
				}
			   if(window.innerWidth>600 && window.innerWidth<768){
			   		if(num>5){
						num = 0;
						$('.fox ul').css({'left':-50*num+'%'});
						num=1;
					}
					$('.fox ul').stop().animate({'left':-50*num+'%'})
			   }
			   if(window.innerWidth<600){
				   	if(num>5){
						num = 0;
						$('.fox ul').css({'left':-100*num+'%'});
						num=1;
					}
					$('.fox ul').stop().animate({'left':-100*num+'%'})
			   }
		},1500)
		

//鼠标滑动内容浮现
	$(window).bind("scroll",function(){
	
	var top=$(this).scrollTop();//当前窗口的滚动距离
	console.log(top);
	
	if(top>190){
		$('.super-ul').css({'transform':'translateY(-200px)','transition':'1.5s'});
	}
	if(top>380){
		$('.section-top').css({'transform':'translateY(-200px)','transition':'1.5s'});
	}
	if(top>430){
		$('.list').css({'transform':'translateY(-200px)','transition':'2.5s'});
		
	}
	if(top>1700){
		$('.new-list').css({'transform':'translateY(-200px)','transition':'1.5s'});
	}
	
	if(top>500){
		//让回到顶部出现
		$('.btn').css('display','block')
	}else{
		$('.btn').css('display','none')
	}
	})
		
})