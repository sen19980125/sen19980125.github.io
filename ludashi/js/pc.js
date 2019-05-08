window.onload = function(){
	var pc_content = $('.pc_content')[0];
	var Divs = pc_content.children;
	var iW = window.innerWidth;
	var iH = window.innerHeight;
	var onoff = true;
	var num = 0;
	var Num = 0;
	var spans = $('.pc_nav span');
	each(Divs,function(i,el){
		el.style.width = iW + 'px';
		el.style.height = iH + 'px';
	})
// 	fn();
// 	function fn(){
// 		move($('.pc_content_one').eq(0).find('img').eq(2)[0],'top',550,1500,'easeOut',function(){
// 			move($('.pc_content_one').eq(0).find('img').eq(2)[0],'top',650,1000,'backBoth',function(){
// 				fn();
// 			})
// 		})
// 	}
	
// 	for(var i=0;i<spans.length;i++){
// 		(function(index){
// 			spans[index].onclick = function(){
// 				move(pc_content,'top',-index*iH,1000,'linear');
// 				spans.removeClass("active");
// 				spans.eq(index).addClass("active");
// 			}
// 		})(i)
// 	}
	
	each(spans,function(i,el){
		
		el.onclick = function(){
			num = -i;
			
			move(pc_content,'top',-i*iH,1000,'linear');
			spans.removeClass("active");
			spans.eq(i).addClass("active");
			
			if(-i == -1){
				setTimeout(function(){
					$('.pc_content_two').addClass('show');
				},1000)
				// $('.pc_span').addClass('pc_span');
				// $('.pc_Span').addClass('pc_Span');
				pc_two();
				pc_Arr();
			}else{
				setTimeout(function(){
					$('.pc_content_two').removeClass('show');
				},1000)
				$('.pc_span').removeClass('pc_span');
				$('.pc_Span').removeClass('pc_Span');
			}
			if(-i == -2){
				setTimeout(function(){
					$('.pc_content_three').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_three').removeClass('show');
				},1000)
			}
			
			if(-i == -3){
				setTimeout(function(){
					$('.pc_content_four').addClass('show');
					$('.pc_bg_four').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_four').removeClass('show');
					$('.pc_bg_four').removeClass('show');
				},1000)
			}
			
			if(-i == -4){
				setTimeout(function(){
					$(".pc_content_five").addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$(".pc_content_five").removeClass('show');
				},1000)
			}
		}
	})
	
	
	var timer = null;
	var Timer = null;
	var arr = [];
	var Arr = [];
	
	
	Each();
	
	$('.pc_content_one').removeClass('show');
	$('.pc_content_one').eq(num).addClass('show');
	
	wheel(pc_content,function(){
		if(onoff){
			onoff = !onoff;
			Num--;
			if(Num<0){
				Num = 0;
			}
			$('.pc_content_one').eq(num).addClass('show');
			spans.removeClass("active");
			spans.eq(Num).addClass("active");
			num++;
			
			if(num>=0){
				num = 0;
			}
			
			if(num == -1){
				setTimeout(function(){
					$('.pc_content_two').addClass('show');
				},1000)
				// $('.pc_span').addClass('pc_span');
				// $('.pc_Span').addClass('pc_Span');
				pc_two();
				pc_Arr();
			}else{
				setTimeout(function(){
					$('.pc_content_two').removeClass('show');
				},1000)
				$('.pc_span').removeClass('pc_span');
				$('.pc_Span').removeClass('pc_Span');
			}
			if(num == -2){
				setTimeout(function(){
					$('.pc_content_three').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_three').removeClass('show');
				},1000)
			}
			
			if(num == -3){
				setTimeout(function(){
					$('.pc_content_four').addClass('show');
					$('.pc_bg_four').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_four').removeClass('show');
					$('.pc_bg_four').removeClass('show');
				},1000)
			}
			
			if(num == -4){
				setTimeout(function(){
					$(".pc_content_five").addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$(".pc_content_five").removeClass('show');
				},1000)
			}
			
			move(pc_content,'top',num*iH,1000,'linear');
			setTimeout(function(){
				onoff = !onoff;
			},1000)
		}
	},function(){
		if(onoff){
			onoff = !onoff;
			Num++;
			if(Num>Divs.length-1){
				Num = Divs.length-1;
			}
			spans.removeClass("active");
			spans.eq(Num).addClass("active");
			num--;
			if(num<(-Divs.length+1)){
				num = -Divs.length+1;
			}
			
			if(num == -1){
				setTimeout(function(){
					$('.pc_content_two').addClass('show');
				},1000)
				// $('.pc_span').addClass('pc_span');
				// $('.pc_Span').addClass('pc_Span');
				pc_two();
				pc_Arr();
			}else{
				setTimeout(function(){
					$('.pc_content_two').removeClass('show');
				},1000)
				$('.pc_span').removeClass('pc_span');
				$('.pc_Span').removeClass('pc_Span');
			}
			
			if(num == -2){
				setTimeout(function(){
					$('.pc_content_three').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_three').removeClass('show');
				},1000)
			}
			
			if(num == -3){
				setTimeout(function(){
					$('.pc_content_four').addClass('show');
					$('.pc_bg_four').addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$('.pc_content_four').removeClass('show');
					$('.pc_bg_four').removeClass('show');
				},1000)
			}
			
			if(num == -4){
				setTimeout(function(){
					$(".pc_content_five").addClass('show');
				},1000)
			}else{
				setTimeout(function(){
					$(".pc_content_five").removeClass('show');
				},1000)
			}
			
			
			
			move(pc_content,'top',num*iH,1000,'linear');
			setTimeout(function(){
				onoff = !onoff;
				$('.pc_content_one').removeClass('show');
			},1000)
		}
	})
	
	function Each(){
			for(i=1000;i<100000;i++){
			if(i >= 1000 && i <= 20000){
				arr.push(i)
			}else if(i >= 50000 && i <= 150000){
				Arr.push(i)
			}
		};
	}
	
	function pc_two(){
		timer = setInterval(function(){
			arr.sort(function(a,b){
				return 0.5-Math.random();
			})
			$('.pc_span').eq(0).html(arr[0]);
			$('.pc_span').eq(1).html(arr[1]);
			$('.pc_span').eq(2).html(arr[2]);
			$('.pc_span').eq(3).html(arr[3]);
		},100)
		setTimeout(function(){
			clearInterval(timer);
		},5000)
	}
	function pc_Arr(){
		Timer = setInterval(function(){
			Arr.sort(function(a,b){
				return 0.5-Math.random();
			})
			$('.pc_Span').html(Arr[0]);
			
		},100)
		setTimeout(function(){
			clearInterval(Timer);
		},5000)
	}
}

