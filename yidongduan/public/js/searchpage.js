(function(){
	search();
	function search(){
		$('.search_box').on('tap',function(){
			$('.search_box p').hide();
		})
		$('.search_box input').on('blur',function(){
			$('.search_box p').show();
		})
		$('#back').on('tap',function(){
			window.history.back();
		})
		
		$('.search .query').on('tap',function(){
			var val = $('.search .search_box input').val().trim();
			if(val){
				window.location.href = 'CommoditiesList.html';
				$('.search .search_box input').val('');
			}
		})
	}
})()