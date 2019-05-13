(function() {
	index();

	function index() {
		var arr = ['./img/tree.jpg', './img/title2.png', 'img/logo.png'];
		var num = 0;
		var timer = null;
		var startTime = new Date().getTime();
		var onoff = false;
		for (var i = 0; i < arr.length; i++) {
			var oImg = new Image();
			oImg.src = arr[i];
			oImg.onload = function() {
				num++;
				if (num == arr.length) {
					onoff = !onoff;
				}
			}
		}

		timer = setInterval(function() {
			var newTime = new Date().getTime();
			var Time = newTime - startTime;
			if (Time >= 7000 && onoff) {
				$('#welcome').animate({
					opacity: 0
				}, 1000, function() {
					$('#welcome').removeClass('show');
				})
				clearInterval(timer);
			}
		}, 40)
	}

	//评分
	score();
	function score() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
			autoplay: true,
		})


		fnscore();

		function fnscore() {
			$('.score .list').on('tap', function(ev) {
				var inputs = $(this).find('input');
				if (ev.target.nodeName == 'A') {
					var all = $(ev.target).parent().children();
					var index = $(ev.target).index();
					all.each(function(i, el) {
						if (i <= index) {
							$(el).animate({
								backgroundPosition: '0 0'
							}, 200)
						} else {
							$(el).animate({
								backgroundPosition: '-38px 0'
							}, 200)
						}
					})
				}
				//记录点击过的评分
				inputs.val(index + 1);
				$('.second .submit #btn').addClass('active');
			})
		}

		$('.second .submit #btn').on('tap', function() {

			var onoffscore = true;
			var onoffchecked = false;
			//判断是否评分
			$('.list input').each(function(i, el) {
				// console.log(el.value);
				if (el.value == '') {
					onoffscore = false;
				}
			})


			//判断是否添加标签
			$('.addto label input').each(function(i, el) {
				// console.log(el.checked);
				if (el.checked) {
					onoffchecked = true;
				}
			})

			if (onoffscore) {
				//评分已经点亮
				if (onoffchecked) {
					//判断标签是否选择
					//成功之后跳转
					$('.third').addClass('show');
					$('.third').css({
						zIndex: 20
					}).animate({
						opacity: 1
					},1000,function() {
						$('.second').animate({
							filter: "blur(5px)"
						},300)
					})

					setTimeout(function(){
						$('.third').animate({
							opacity:0
						},1000,function(){
							$('.second').animate({
								filter: "blur(0px)"
							},300)
						}).css({
							zIndex:8
						}).removeClass("show");
							
						//让第四页出现
						$('.fourth').addClass('show');
						$('.second').animate({
							opacity:0
						},1000,function(){
							$('.second').removeClass('show').css({
								opacity:1
							})
						})
					},3000)				
				} else {
					//没有选择标签
					$('.second .error').animate({
						transform: "scale(1)",
						opacity: 1
					}).html('请给景区添加标签');
					setTimeout(function() {
						$('.second .error').animate({
							transform: "scale(0)",
							opacity: 0
						})
					}, 2000)
				}
			} else {
				//评分没有点亮或是没有全部点完
				$('.second .error').animate({
					transform: "scale(1)",
					opacity: 1
				})
				setTimeout(function() {
					$('.second .error').animate({
						transform: "scale(0)",
						opacity: 0
					})
				}, 2000)
			}
		})
	}
	
	//上传线索
	newsClue();
	function newsClue(){
		var obj = {
			video:null,
			image:null
		}
		$('.fourth .clue input').eq(0).on('change',function(){
			var info = $('.fourth .clue input').get(0).files[0];
			var str = info.type.split('/')[0];
			if(str == 'video'){
				obj.video = info;
				$('.fourth .submit #btn').addClass('active');
			}else{
				alert('请选择正确的文件');
			}
		})
		
		$('.fourth .clue input').eq(1).on('change',function(){
			var info = $('.fourth .clue input').get(1).files[0];
			var str = info.type.split('/')[0];
			if(str == 'image'){
				obj.image = info;
				$('.fourth .submit #btn').addClass('active');
			}else{
				alert('请选择正确的文件');
			}
		})
		
		$('.fourth .submit #btn').on('tap',function(){
			if(obj.video || obj.image){
				//进来说明已经选择文件
				$('.fifth').addClass('show');
				$('.fourth').animate({
					opacity:0
				},1000,function(){
					$('.fourth').removeClass('show').css({
						opacity:1
					})
				})
			}else{
				//没有选择文件
				$('.fourth .error').animate({
					transform: "scale(1)",
					opacity: 1
				})
				setTimeout(function() {
					$('.fourth .error').animate({
						transform: "scale(0)",
						opacity: 0
					})
				}, 2000)
			}
		})
	}
	
	//给视频添加标签
	videoTag();
	function videoTag(){
		
		$('.videotag label').on('tap',function(){
			$('.fifth .submit #btn').addClass('active');
		})
		
		$('.fifth .submit #btn').on('tap',function(){
			var inputs = $('.fifth .videotag input');
			var onoff = false;
			inputs.each(function(i,el){
				//判断input的checked值，只要有一个标签选中，这个标签就为true
				if(el.checked){
				//进来说明有标签选中了
					onoff = true;
				}
			})
			if(onoff){
				//跳转到第六屏
				$('.sixth').addClass('show');
				$('.fifth').animate({
					opacity:0
				},1000,function(){
					$('.fifth').removeClass('show').css({
						opacity:1
					});
				})
			}else{
				$('.fifth .error').animate({
					transform: "scale(1)",
					opacity: 1
				})
				setTimeout(function() {
					$('.fifth .error').animate({
						transform: "scale(0)",
						opacity: 0
					})
				}, 2000)
			}
		})
	}
	
	//重新评价
	reset();
	function reset(){
		$('.sixth .submit #btn').on('tap',function(){
			$('.second').css({
				zIndex:1
			}).addClass('show')
			$('.sixth').animate({
				opacity:0
			},1000,function(){
				$('.sixth').removeClass('show').css({
					opacity:1
				});
				$('.second').css({
					zIndex:9
				})
			})
		})
	}
})()
