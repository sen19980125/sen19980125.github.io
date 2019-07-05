(function(){
	$('.btn').on('tap',function(){
		var username = $('#username').val().trim();
		var pass = $('#pass').val().trim();
		if(username&&pass){
			$.ajax({
				type:'post',
				url:'/login',
				dataType:'JSON',
				data:{
					username:username,
					pass:pass
				},
				success:function(data){
					var json = JSON.parse(data);
					if(json.err == 0&&json.ok == 1){
						$('.success').html('登录成功').animate({
							transform:"scale(1)"
						},500,function(){
							setTimeout(function(){
								$('.success').animate({
									transform:"scale(0)"
								},500,function(){
									var user = {
										username,
										pass
									};
									storage.temporary('user',user);
									window.location.href = 'homepage.html';
								})
							},1000)
						})
					}else{
						$('.success').html('账户或密码错误，如未注册请进行注册').animate({
							transform:"scale(1)"
						},500,function(){
							setTimeout(function(){
								$('.success').animate({
									transform:"scale(0)"
								},500)
							},1000)
						})
					}
				}
			})
		}else{
			$('.success').html('请输入您的账户或密码').animate({
				transform:"scale(1)"
			},500,function(){
				setTimeout(function(){
					$('.success').animate({
						transform:"scale(0)"
					},500)
				},1000)
			})
		}
	})
	
	$('#register').on('tap',function(){
		window.location.href = 'registration.html';
	})
})()