
var ordinary = $('.register .ordinary');
var mobilephone = $('.register .mobilephone');
var register_tow = $('.register .register_tow');
var register_three = $('.register .register_three');
ordinary.on('click',function(){
	ordinary.addClass('active');
	register_tow.show();
	mobilephone.removeClass('active');
	register_three.hide();
})
mobilephone.on('click',function(){
	ordinary.removeClass('active');
	register_tow.hide();
	mobilephone.addClass('active');
	register_three.show();
})

//点击注册发送请求给后台

var register = $('.register .register_tow #login');
var text = $('.register .register_tow input').eq(0);
var pass = $('.register .register_tow input').eq(1);
var err = $('.register .register_tow .error');
register.on('click',function(){
	$.ajax({
		url:'/register',
		type:'post',
		dataType:'JSON',
		data:{
			name:text.val(),
			pass:pass.val()
		},
		success:function(data){
			if(data.success == '注册成功'){
				alert(data.success);
				window.open('../signin.html','_self');
			}else{
				err.show();
				setTimeout(function(){
					err.hide();
				},1500)
			}
		}
	})
})