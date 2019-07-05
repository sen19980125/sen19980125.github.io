(function(){
	ShoppingMall();
	function ShoppingMall(){
		
		$.each(data,function(i,item){
			var li = $('<li href="details.html#shopingId='+item.id+'">'+
							'<div>'+
								'<img src="img/classification_icon01.png"/>'+
								'<p>'+item.name+'</p>'+
							'</div>'+
						'</li>');
				$('.list').append(li);
		})
		
		$('.recommend .list li').on('tap',function(){
			var href = $(this).attr('href');
			if(href){
				window.location.href = href;
			}
		})
	}
})()