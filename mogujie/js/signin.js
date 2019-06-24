var qrcode = $('.sweepcode .qrcode');
var accountnumber = $('.manual .accountnumber');

qrcode.on('click',function(){
	$('.banner .sweepcode').hide();
	$('.banner .manual').show();
	$('.success').addClass('chuxian');
})

accountnumber.on('click',function(){
	$('.banner .sweepcode').show();
	$('.banner .manual').hide();
})


var ordinary = $('.manual .ordinary');
var mobilephone = $('.manual .mobilephone');
var manual_tow = $('.manual .manual_tow');
var manual_three = $('.manual .manual_three');
ordinary.on('click',function(){
	ordinary.addClass('active');
	manual_tow.show();
	mobilephone.removeClass('active');
	manual_three.hide();
})
mobilephone.on('click',function(){
	ordinary.removeClass('active');
	manual_tow.hide();
	mobilephone.addClass('active');
	manual_three.show();
})

//点击登陆发送请求给后台

var login = $('#login');
var text = $('.manual_tow input').eq(0);
var password = $('.manual_tow input').eq(1);
var err = $('.manual_tow .error');

login.on('click',function(){
	$.ajax({
		url:'/login',
		type:'post',
		dataType:'JSON',
		data:{
			name:text.val(),
			pass:password.val()
		},
		success:function(data){
			if(data.success == '登录成功'){
				window.localStorage.setItem('name',text.val());
				window.localStorage.setItem('pass',password.val());
				alert(data.success);
				window.open('../ShoppingMall.html','_self');
			}else{
				err.show();
				setTimeout(function(){
					err.hide();
				},1500)
			}
			
		}
	})
})
