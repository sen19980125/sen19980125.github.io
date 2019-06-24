
// console.log(oDataShopping);
//主题市场
market();
function market(){
	var data = mianMark.title;
	
	//左边的导航标题
	for(var i=0;i<data.length;i++){
		var json = mianMark[data[i].categoryDetailPid].data.topic3.list;
		// console.log(json)
		var li = $('<li indexdata="'+data[i].categoryDetailPid+'">'+
								'<a href="#">'+data[i].categoryName+'</a>'+
								'<a href="'+json[0].link+'" style="color:'+json[0].titleColor+'">'+json[0].title+'</a>'+
								'<a href="'+json[1].link+'" style="color:'+json[1].titleColor+'">'+json[1].title+'</a>'+
								'<a href="'+json[2].link+'" style="color:'+json[2].titleColor+'">'+json[2].title+'</a>'+
							'</li>');
							
		var list = $('.Mall_nav');
		list.append(li);
	}
	//给li创建事件
	list.find('li').on('mouseenter',function(){
		var index = $(this).attr('indexdata');
		// console.log(index);
		var obj = mianMark[index].data;
		Mall_right(obj);
		// console.log(obj);
	})
	$('.Mall_content').on('mouseenter',function(){
		$('.Mall_right').show();
	})
	
	$('.Mall_content').on('mouseleave',function(){
		$('.Mall_right').hide();
	})
	
	
	
	//渲染右边的数据
	function Mall_right(obj){
		if(!obj){
			return '';
		}
		var arr = [];
		arr.push(obj.topic1,obj.topic2,obj.topic3);
		// console.log(arr);
		var list = $('.Mall_right_list');
		
		list.html('');
		for(var i=0;i<arr.length;i++){
			var li = $('<li>'+
							'<h3>'+
								'<a href="'+arr[i].info.link+'">'+arr[i].info.title+'</a>'+
								'<a href="#">更多></a>'+
							'</h3>'+
							'<p>'+Mall_right_a(arr[i].list)+
							'</p>'+
						'</li>');
									
			
			list.append(li);
		}
		
		
		//渲染猜你喜欢
		var arr1 = obj.guessLike.list;
		var lis = $('.Mall_guess_list li');
		lis.html('');
		for(var i=0;i<arr1.length;i++){
			var div = $('<a href="commodity.html">'+
							'<img src="'+arr1[i].image+'">'+
							'<p>'+arr1[i].title+'</p>'+
						'</a>');
			
			lis.append(div);
		}
		
		
		
		//生成a标签的函数
		function Mall_right_a(arr){
			var str = '';
			for(var i=0;i<arr.length;i++){
				str += '<a href="commodity.html" style="color:'+arr[i].titleColor+'">'+arr[i].title+'</a>'
			}
			
			return str;
		}
	}
}

//今日必抢
// var banner = oDataShopping.toDayRob;
// console.log(banner);
mustseize();
function mustseize(){
		var data = oDataShopping.toDayRob.banner;
		// console.log(data);
		var list = $('#mustseize_banner .swiper-wrapper');
		
		
		for(var i=0;i<data.length;i++){
			
				var div = $('<div class="swiper-slide">'+
								'<div>'+
									'<img src="'+data[i].image+'">'+
								'</div>'+
								'<div>'+
									'<p>'+data[i].title+'</p>'+
									'<span>¥'+data[i].salePrice+'</span>'+
									'<del>¥'+data[i].price+'</del>'+
								'</div>'+
							'</div>');
				list.append(div);
		}
		
	var mySwiper = new Swiper ('#mustseize_banner', {
	   direction: 'horizontal', 
	   slidesPerView : 4,
	   loop: true,
	   autoplay:true,
	   navigation: {
	     nextEl: '.swiper-button-next',
	     prevEl: '.swiper-button-prev',
	   },
	 })
}


//今日必抢下面的女装
productstyle();
function productstyle(){
	var data = oDataShopping.womenContentTitle.title;
	//渲染标题
	var style_nav = $('.productstyle .style_nav');
	for(var i=0;i<data.length;i++){
		var A = $('<a href="'+data[i].link+'">'+data[i].title+'</a>');
		style_nav.append(A);
	}
	
	//渲染轮播
	var json = oDataShopping.womenContentTitle.womenShoes;
	// console.log(json);
	var list = $('.product_content .swiper-container .swiper-wrapper')
	for(var i=0;i<json.length;i++){
		var div = $('<div class="swiper-slide">'+
						'<div>'+
							'<img src="'+json[i].image+'"/>'+
							'<p>'+json[i].title+'</p>'+
							'<span>¥'+json[i].price+'</span>'+
						'</div>'+
					'</div>');
								
		list.append(div);
	}
	
	var mySwiper = new Swiper ('#productstyle_banner', {
	   direction: 'horizontal', 
	   slidesPerView : 4,
	   loop: true,
	   autoplay:true,
	   navigation: {
	     nextEl: '.swiper-button-next',
	     prevEl: '.swiper-button-prev',
	   },
	})
}


//渲染猜你喜欢
guess();
function guess(){
	var data = infoData.similar.data.list;
	console.log(data);
	var lis = $('.guess .guess_list li')
	for(var i=0;i<data.length;i++){
		 var div = $('<div>'+
						'<div>'+
							'<img src="'+data[i].image+'">'+
						'</div>'+
						'<p>'+data[i].title+'</p>'+
						'<div>'+
							'<b>¥'+data[i].discountPrice+'</b>'+
							'<span>¥</span>'+
							'<del>'+data[i].price+'</del>'+
							'<i></i>'+
							'<span>'+data[i].itemSale+'</span>'+
						'</div>'+
						'<a href="commodity.html" class="guess_mask">'+
							'<p>找相似</p>'+
						'</a>'+
					'</div>');
									
			lis.append(div);
			
			div.on('mouseenter',function(){
				$(this).find('.guess_mask').show();
			})
			div.on('mouseleave',function(){
				$(this).find('.guess_mask').hide();
			})
	}
}

//渲染登录框
getinformation();
function getinformation(){
	var name = window.localStorage.getItem('name');
	var pass = window.localStorage.getItem('pass');
	
	if(name && pass){
		$.ajax({
			url:'/getinformation',
			type:'post',
			data:{
				name:name,
				pass:pass
			},
			dataType:'JSON',
			success:function(data){
				if(data.err == 0&&data.ok == 1){
					$('.signs .sign').html(data.data.name);
					$('.signs .signout').show();
				}else{
					$('.signs sign').html('登录');
					$('.signs .signout').hide();
				}
			}
		})
	}
	
	$('.signs .signout').on('click',function(){
		window.localStorage.removeItem('name');
		window.localStorage.removeItem('pass');
		$('.signs .signout').hide();
		$('.signs .sign').html('登录');
	})
}