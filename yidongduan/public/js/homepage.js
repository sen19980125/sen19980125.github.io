(function(){
	banner();
	function banner(){
		var swiper =new Swiper ('#swiper',{
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			autoplay:true
		}) 
	}
	homepage();
	function homepage(){
		// $('.search_box').on('tap',function(){
		// 	$('.search_box p').hide();
		// })
		// $('.search_box input').on('blur',function(){
		// 	$('.search_box p').show();
		// })
		
		$.each(data,function(i,item){
			var div = $('<div href="details.html#shopingId='+item.id+'">'+
							'<img src="'+item.img+'"/>'+
							'<h3>'+item.name+'</h3>'+
							'<p>'+item.info+'</p>'+
							'<div>'+
								'<span>'+item.price+'</span>'+
								'<span>看相似</span>'+
							'</div>'+
						'</div>')
				$('.guess').append(div);
		})
		$('.guess div').on('tap',function(){
			var href = $(this).attr('href');
			if(href){
				window.location.href = href;
			}
		})
	}
})()