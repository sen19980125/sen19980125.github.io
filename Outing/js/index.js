(function(){
	index();
	function index(){
		var arr = ['./img/tree.jpg','./img/title2.png','img/logo.png'];
		var num = 0;
		var timer = null;
		var startTime = new Date().getTime();
		var onoff = false;
		for(var i=0;i<arr.length;i++){
			var oImg = new Image();
			oImg.src = arr[i];
			oImg.onload = function(){
				num++;
				if(num == arr.length){
					onoff = !onoff;
				}
			}
		}
		
		timer = setInterval(function(){
			var newTime = new Date().getTime();
			var Time = newTime - startTime;
			if(Time>=8000&&onoff){
				$('#welcome').animate({
					opacity:0
				},1000,function(){
					$('#welcome').removeClass('show');
				})
				clearInterval(timer);
			}
		},40)
	}
	
	//评分
	score();
	function score(){
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			autoplay:true,
		  }) 
		  
		  
		  fnscore();
		  function fnscore(){
			  $('.score .list').on('tap',function(ev){
				  var inputs = $(this).find('input');
				  if(ev.target.nodeName == 'A'){
					  var all = $(ev.target).parent().children();
					  var index = $(ev.target).index();
					  all.each(function(i,el){
						  if(i<=index){
							 $(el).animate({
							 	backgroundPosition:'0 0'
							 },200) 
						  }else{
							  $(el).animate({
							  	backgroundPosition:'-38px 0'
							  },200)
						  }
					  })
				  }
				  //记录点击过的评分
				  inputs.val(index+1);
				  $('.submit #btn').addClass('active');
			  })
		  }
		  
		  $('.submit #btn').on('tap',function(){
			  
			  var onoffscore = true;
			  var onoffchecked = false;
			  //判断是否评分
			  $('.list input').each(function(i,el){
				  // console.log(el.value);
				  if(el.value == ''){
					  onoffscore = false;
				  }
			  })
			  
			  
			  //判断是否添加标签
			  $('.addto label input').each(function(i,el){
				  // console.log(el.checked);
				  if(el.checked){
					  onoffchecked = true;
				  }
			  })
			  
			  if(onoffscore){
				  //评分已经点亮
				  if(onoffchecked){
					  //判断标签是否选择
					 console.log('成功');
					  
				  }else{
					  //没有选择标签
					   $('.error').animate({
						 transform:"scale(1)",
						 opacity:1
					  }).html('请给景区添加标签');
					  setTimeout(function(){
						  $('.error').animate({
							 transform:"scale(0)",
							 opacity:0
						  })
					  },2000)
				  }
			  }else{
				  //评分没有点亮或是没有全部点完
				  $('.error').animate({
					 transform:"scale(1)",
					 opacity:1
				  })
				  setTimeout(function(){
					  $('.error').animate({
						 transform:"scale(0)",
						 opacity:0
					  })
				  },2000)
			  }
		  })
	}
})()