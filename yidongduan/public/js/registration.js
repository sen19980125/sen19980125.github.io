(function(){
	$('#monitor').on('input',function(){
		var onoff = this.checked;
		if(onoff){
			$('.login_btn .btn').addClass('show');
			$('.login_btn .btn').on('tap',function(){
				var username = $('#username').val().trim();
				var pass = $('#pass').val().trim();
				if(username&&pass){
					$.ajax({
						url:'/registration',
						type:'post',
						dataType:'JSON',
						data:{
							username:username,
							pass:pass
						},
						success:function(data){
							var json = JSON.parse(data);
							if(json.err == 0&&json.ok == 1){
								$('.success').html('注册成功，即将跳转到登录页').animate({
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
							}else{
								$('.success').html('注册失败，该用户已被注册').animate({
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
				}
			})
		}else{
			$('.login_btn .btn').removeClass('show');
			$('.login_btn .btn').off('tap');
		}
	})
})()