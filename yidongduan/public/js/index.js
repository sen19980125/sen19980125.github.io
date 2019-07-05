(function(){
	startup();
	function startup(){
		var swiper1 = new Swiper('#swiper1',{});
		var clock = null;
		var num = 5;
		$('.wrap').on('tap',function(){
			$('.guide').animate({
				opacity:0
			},1000,function(){
				$('.guide').css({
					zIndex:0
				})
				setTimeout(function(){
					$('.countdown').show();
					$('.time').show().html(num);
					clock = setInterval(function(){
						num--;
						$('.time').html(num);
						if(num == -1){
							$('.countdown').hide();
							$('.time').hide();
							clearInterval(clock);
							window.location.href = 'homepage.html';
						}
					},1000)
				},1000)
				
				$('.jump').each(function(i,el){
					clearInterval(clock);
					$(el).on('tap',function(){
						window.location.href = $(this).attr('href');
					})
				})
			})
		})
	}
})()