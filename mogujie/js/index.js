

$(window).on('scroll',function(ev){
	// console.log(window.pageYOffset)
	if(window.pageYOffset>=300){
		$('#topbar').fadeIn(100);
	}else{
		$('#topbar').fadeOut(100);
	}
})


Nav()
//头部导航，关于我们
function Nav(){
	
	var menu = $('.nav .menu');
	var data = oData.aboutMe.data;
	// console.log(data);
	//封装创建ul的函数
	function menuUl(arr){
		var ul = $('<ul>');
		if(arr.length>=10){
			$.each(arr,function(i,item){
				if(i>5){
					return
				}
				var li = $('<li><a href="'+item.link+'">'+item.title+'</a></li>');
				ul.append(li);
			})
		}else{
			$.each(arr,function(i,item){
				var li = $('<li><a href="'+item.link+'">'+item.title+'</a></li>');
				ul.append(li);
			})
		}
		return ul;
	}
	
	//渲染ul里面的数据
	menu.append(menuUl(data[32260].list));
	
	menu.append(menuUl(data[32261].list));
	
	menu.append(menuUl(data[32262].list));
	
	menu.append(menuUl(data[32263].list));
	
	menu.append(menuUl(data[132238].list));
	
	menu.append(menuUl(data[132239].list));
	
	//渲染menu底部
	
	var div = $('<div class="menu_foot">');
	var html ='<h3>'+data[32163].list[11].title+'</h3>'+
				'<p>'+menuP(data[32170].list)+'</p>';
	
	$('.menu').append(div.html(html));	
	//封装创建p标签的函数
	function menuP(arr){
		var str = '';
		for(var i=0;i<arr.length;i++){
			str += arr[i].title + arr[i].subTitle + ' | ';
		}
		return str;
	}
	
	//给li添加事件
	$('.gywm').on('mouseenter',function(){
		$('.menu').show();
	})
	$('.gywm').on('mouseleave',function(){
		$('.menu').hide();
	})
}

//主题目录
mainNav();
function mainNav(){
	var data = oData.catalog;
	var directory_menu = $('.catalog .directory_menu');
	
	directory_menu.append(createMenu(data[0].list[0].title,data[0].list));
	directory_menu.append(createMenu(data[1].list[20].title,data[1].list));
	directory_menu.append(createMenu(data[2].list[10].title,data[2].list));
	// console.log(data);
	
	//封装创建目录的函数
	function createMenu(title,arr){
		
		//创建a标签
		var str = '';
		for(var i=1;i<arr.length-1;i++){
			str += '<a href="'+arr[i].link+'">'+arr[i].title+'</a>';
		}
		
		// console.log(str);
		//创建div
		var div = $('<div>');
		var html = '<h3>'+title+'</h3>'+ str;
		div.html(html);
		// console.log(div);
		
		return div;
	}
	
	//给目录添加事件
	$('.catalog').on('mouseenter',function(){
		$('.directory_menu').show();
	})
	$('.catalog').on('mouseleave',function(){
		$('.directory_menu').hide();
	})
}

//搜索栏
searchBar();
function searchBar(){
	var data = oData.searchData;
	$('.search input').on('input',function(){
		var val = this.value;
		var arr = data[val];
		// console.log(arr);
		var searchbar_top = $('.search .searchbar .searchbar_top');
		var searchbar_bottom = $('.search .searchbar .searchbar_bottom');
		searchbar_top.html('');
		searchbar_bottom.html('');
		if(arr){
			searchbar_top.append(searchbarA(arr[0].list));
			searchbar_bottom.append(searchbarLI(arr));
			$('.searchbar').show();
		}else{
			$('.searchbar').hide();
		}
	})
	
	
	
	//创建a标签的函数
	function searchbarA(arr){
		var str = '';
		for(var i=0;i<arr.length;i++){
			str += '<a href="'+arr[i].link+'">'+arr[i].total+arr[i].desc+'<span style="background:red url('+arr[i].icon+')no-repeat center center;">'+'</span>'+'</a>';
		}
		return str;
	}
	
	//创建li的函数
	function searchbarLI(arr){
		var str = '';
		for(var i=1;i<arr.length;i++){
			str += '<li>'+
						'<span>'+
							'<a href="'+arr[i].link+'">'+arr[i].query+'</a>'+
						'</span>'+
						'<span>'+
							spanA(arr[i].tags)+
						'</span>'+
					'</li>';
		}
		
		//生成span里面的a标签
		function spanA(arr1){
			if(!arr1){
				return '';
			}
			var str = '';
			for(var i=0;i<arr1.length;i++){
				str += '<a href="#">'+arr1[i].tag+'</a>';
			}
			return str;
		}
		return str;
	}
}

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