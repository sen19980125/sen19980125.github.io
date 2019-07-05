(function(){
	var user = storage.TemporaryGet('user')[0];
	if(user){
		$.ajax({
			url:'/getUserInfo',
			type:'post',
			dataType:'JSON',
			data:{
				username:user.username,
				pass:user.pass
			},
			success:function(data){
				var json = JSON.parse(data);
				if(json.err == 0&&json.ok == 1){
					if(json.data.username==user.username&&json.data.pass==user.pass){
						$('#headportrait img').attr('src','img/my_touxiang.png');
						$('.username').html(json.data.username);
						
						$('.myorder .order').on('tap',function(){
							window.location.href = 'MyOrder.html';
						})
					}
				}
			}
		})
	}else{
		$('#headportrait').on('tap',function(){
			window.location.href = 'login.html';
		})
	}
})()