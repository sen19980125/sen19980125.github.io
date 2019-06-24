
// console.log(oData);
//渲染左边的瀑布流
leftLI();
function leftLI(){
	
	var datas = oData.contentLeft;
	var div = null;
	// console.log(datas)
	var num = 1;
	var arr = getData(num);
	divLeft(arr);
	var offon = true;
	
	$(window).on('scroll',function(){
		
		var LI = minLI()[0];
		var LI_h = LI.getBoundingClientRect().bottom;
		var ih = window.innerHeight;
		if(ih>=LI_h&&offon){
			offon = false;
			num++;
			var arr = getData(num);
			setTimeout(function(){
				divLeft(arr);
			},1500)
			
		}
	})
		
	
	//创建生成div的函数
	function divLeft(arr){
		for(var i=0;i<arr.length;i++){
			
			if(arr[i].modelData.data){
				var data = arr[i].modelData.data;
				// console.log(data);
				div = $('<div class="item">'+
								'<img src="'+data.cover+'">'+
								'<p>'+
									Dpm(data.brandInfo)+
								'</p>'+
								'<a href="commodity.html" class="mask">'+
									'<span>'+
										'<b>'+data.cFav+'</b>'+
									'</span>'+
									'<span></span>'+
									'<p>'+data.content+'</p>'+
								'</a>'+
							'</div>')
			};
			
			(function(div){
				
					var iH = div.find('img')[0].height;
					var iW = div.find('img')[0].width;
					// console.log(iH,iW)
					var h = (220*iH)/(iW);
					
					div.find('.mask').css('height',h);
					
					var li = minLI();
					li.append(div);
			})(div)
			
			
			//给item添加事件
			$('.list li .item').on("mouseenter",function(){
				$(this).find('.mask').show();
			})
			$('.list li .item').on("mouseleave",function(){
				$(this).find('.mask').hide();
			})
			offon = true;
		}
	}
	
	
	//判断哪个li最小
		function minLI(){
			var lis = $('.list li');
			var min = Infinity;
			var obj = null;
			$.each(lis,function(i,el){
				var h = el.offsetHeight
				if(h<min){
					min = h;
					obj = el;
				}
			})
			return $(obj);
		}
		
	//控制拿取页的数据
		function getData(num){
			/*
				0-14 
				15-30
			*/
		   var data = oData.contentLeft;
		   var arr = [];
		   for(var i=(15*num-15);i<=(15*num-1);i++){
			   if(!data[i]){
				   break;
			   }
			   arr.push(data[i]);
		   }
		   // console.log(arr);
		   return arr;
		}	
}
//通用的封装函数

//渲染p标签里面的店铺名
	function Dpm(arr){
		if(!arr){
			return '';
		}
		var str = '';
		for(var i=0;i<arr.length;i++){
			str += '<a href="'+arr[i].link+'">'+'<span style="background:url('+arr[i].brandLogo+')no-repeat;"></span>'+arr[i].brandName+'</a>'
		}
		return str;
	}



content()
function content(){
	
	//渲染内容大图
	var src = oData.contentCenterBig.list[0].img;
	var imgs = $('.content_center .imgs');
	var img = $('<img src="'+src+'">');
	imgs.append(img);
	
	//渲染大图下面的购物商城
	
	var data = oData.shopping[0].list;
	var ul = $('.center_icon ul');
	ul.append(contentLI(data));
	
	
	
	//创建生成li的函数
	function contentLI(arr){
		var str = '';
		for(var i=0;i<arr.length;i++){
			str += '<li>'+
						'<a href="'+arr[i].link+'">'+
							'<span style="background:url('+arr[i].cateIcon+')"></span>'+
							'<p>'+arr[i].cateName+'</p>'+
						'</a>'+
					'</li>';
		}
		return str;
	}
	
	//渲染购物商城里面的小标签
	var json = oData.shopping[1].list;
	var div = $('.center_icon div');
	div.append(contentA(json));
	// console.log(json)
	
	
	//创建生成a标签的函数
	function contentA(arr){
		var str = '';
		for(var i=0;i<arr.length;i++){
			str += '<a href="'+arr[i].link+'" style="color:'+arr[i].color+';background:'+arr[i].bgColor+'">'+arr[i].word+'</a>'
		}
		return str;
	}
	
	//生成购物商城下面的瀑布流
	var cont_data = oData.contentCenter;
	
	//滚动条事件
	
	var num = 1;
	var arr = getData(num);
	cont_Div(arr);
	var offon = true;
$(window).on('scroll',function(){
		
		var LI = minLI()[0];
		var LI_h = LI.getBoundingClientRect().bottom;
		var ih = window.innerHeight;
		if(ih>=LI_h&&offon){
			offon = false;
			num++;
			var arr = getData(num);
			setTimeout(function(){
				cont_Div(arr);
			},1500)
			
		}
	})
	
	
	// console.log(cont_data);
	//生成div的函数
	var data = oData.contentCenter;
	// cont_Div(data);
	function cont_Div(arr){
		for(var i=0;i<arr.length;i++){
			var data = arr[i].modelData.data;
			// console.log(data)
			if(data){
				var div = $('<div class="cont_item">'+
							'<img src="'+data.cover+'">'+
							'<p>'+
								Dpm(data.brandInfo)+
							'</p>'+
							'<a href="commodity.html" class="cont_mask">'+
								'<span>'+
									'<b>'+data.cFav+'</b>'+
								'</span>'+
								'<span></span>'+
								'<p>'+data.content+'</p>'+
							'</a>'+
						'</div>')
				var iH = div.find('img')[0].height;
				var iW = div.find('img')[0].width;	
				var h = (220*iH)/(iW);
				div.find('.cont_mask').css('height',h);
			}
			var li = minLI();
			li.append(div);
			
			
			// console.log(iH,iW)
			
			
			
			
			$('.cont_list li .cont_item').on("mouseenter",function(){
				$(this).find('.cont_mask').show();
			})
			$('.cont_list li .cont_item').on("mouseleave",function(){
				$(this).find('.cont_mask').hide();
			})
			offon = true;
		}
	}
	
	//最小li
	function minLI(){
		var lis = $('.cont_list li');
		var min = Infinity;
		var obj = null;
		$.each(lis,function(i,el){
			var h = el.offsetHeight
			if(h<min){
				min = h;
				obj = el;
			}
		})
		return $(obj);
	}
	
	//控制拿取页的数据
		function getData(num){
			/*
				0-14 
				15-30
			*/
		   var data = oData.contentCenter;
		   var arr = [];
		   for(var i=(15*num-15);i<=(15*num-1);i++){
			   if(!data[i]){
				   break;
			   }
			   arr.push(data[i]);
		   }
		   // console.log(arr);
		   return arr;
		}	
}

//渲染右边的瀑布流
rightLI();
function rightLI(){
	var json = oData.contentRigth;
	// console.log(json);
	
	//滚动条事件
		
		var num = 1;
		var arr = getData(num);
		rightDiv(arr);
		var offon = true;
	$(window).on('scroll',function(){
			var LI = minLI()[0];
			var LI_h = LI.getBoundingClientRect().bottom;
			var ih = window.innerHeight;
			if(ih>=LI_h&&offon){
				offon = false;
				num++;
				var arr = getData(num);
				setTimeout(function(){
					rightDiv(arr);
				},1500)
				
			}
		})
	
	
	//生成div的函数
	rightDiv(json);
	function rightDiv(arr){
		for(var i=0;i<arr.length;i++){
			if(i>=10){
				return;
			}
			var data = arr[i].modelData.data;
			// console.log(data)
			if(data){
				var div = $('<div class="right_item">'+
							'<img src="'+data.cover+'">'+
							'<p>'+
								Dpm(data.brandInfo)+
							'</p>'+
							'<a href="commodity.html" class="right_mask">'+
								'<span>'+
									'<b>'+data.cFav+'</b>'+
								'</span>'+
								'<span></span>'+
								'<p>'+data.content+'</p>'+
							'</a>'+
						'</div>');
						
				var iH = div.find('img')[0].height;
				var iW = div.find('img')[0].width;	
				var h = (220*iH)/(iW);
				div.find('.cont_mask').css('height',h);
						
			}
			
			var li = minLI();
			li.append(div);
			
			$('.right_list li .right_item').on("mouseenter",function(){
				$(this).find('.right_mask').show();
			})
			$('.right_list li .right_item').on("mouseleave",function(){
				$(this).find('.right_mask').hide();
			})
			
			offon = true;
		}
	}
	//最小li
	function minLI(){
		var lis = $('.right_list li');
		var min = Infinity;
		var obj = null;
		$.each(lis,function(i,el){
			var h = el.offsetHeight
			if(h<min){
				min = h;
				obj = el;
			}
		})
		return $(obj);
	}
	
	//控制拿取页的数据
		function getData(num){
			/*
				0-14 
				15-30
			*/
		   var data = oData.contentRigth;
		   var arr = [];
		   for(var i=(15*num-15);i<=(15*num-1);i++){
			   if(!data[i]){
				   break;
			   }
			   arr.push(data[i]);
		   }
		   // console.log(arr);
		   return arr;
		}	
}
