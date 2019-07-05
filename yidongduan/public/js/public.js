(function(){
	back();
	function back(){
		$('#back').on('tap',function(){
			window.history.back();
		})
	}
	search();
	function search(){
		$('.search .search_box').on('tap',function(){
			window.location.href = 'searchpage.html';
		})
	}
	footerNav();
	function footerNav(){
		$('.footer_nav ul li').on('tap',function(){
			var href = $(this).attr('href');
			if(href){
				window.location.href = href;
			}
		})
	}
	LocationSearch();
	function LocationSearch(){
		window.onscroll = function(){
			var iH = window.pageYOffset;
			if(iH>=130){
				$('.dy_search').show();
			}else{
				$('.dy_search').hide();
			}
		}
	}
	dy_back();
	function dy_back(){
		$('.dy_search .dy_back').on('tap',function(){
			window.history.back();
		})
	}
})()