(function(){
	ProductDetails();
	function ProductDetails(){
		var mySwiper = new Swiper('.swiper-container',{
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			autoplay:true
		  })   
	}
	details();
	function details(){
		var id = window.location.hash.split('=')[1];
		var json = data.filter(function(item,i){
			return item.id == id;
		})[0];
		
		//console.log(json);
		
		$('#introduce').html(json.info);
		$('#price').html(json.price)
		$('#addtocart').on('tap',function(){
			var user = storage.TemporaryGet('user')[0];
			if(user){
				storage.set('list',json);
					
				$('.success').animate({
					transform:"scale(1)"
				},500,function(){
					setTimeout(function(){
						$('.success').animate({
							transform:"scale(0)"
						},500)
					},1000)
				})
			}else{
				$('.success').html('请登录').animate({
					transform:"scale(1)"
				},500,function(){
					setTimeout(function(){
						$('.success').animate({
							transform:"scale(0)"
						},500,function(){
							window.location.href = 'login.html';
						})
					},1000)
				})
			}
			
		});
		
		$('#jump').on('tap',function(){
			window.location.href = 'shoppingcart.html';
		})
	}
})()