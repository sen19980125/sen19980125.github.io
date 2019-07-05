(function(){
	var json = storage.TemporaryGet('purchase')[0];
	var money = parseInt(json.price.substring(1).split('.'))*json.num;
	var newData = ['银联支付','微信支付','支付宝支付'];
	let vm = new Vue({
		el:'#app',
		data:{
			newData,
			money,
			onoff:false,
		},
		methods:{
			monitor(ev){
				this.onoff = ev.target.checked;
				if(this.onoff){
					$('.btn').addClass('show');
				}else{
					$('.btn').removeClass('show');
				}
			},
			payment(){
				if(this.onoff){
					$('.payment_mask').show();
				}else{
					$('.success').html('请选择支付方式').animate({
						transform:"scale(1)"
					},500,function(){
						setTimeout(function(){
							$('.success').animate({
								transform:"scale(0)"
							},500)
						},1000)
					})
				}
			},
			ConfirmPayment(){
				var val = $('.payment_mask input').val().trim();
				if(val){
					window.location.href = 'SuccessfulPayment.html';
					$('.payment_mask').hide();
				}
			},
			back(){
				window.history.back();
			}
		}
	})
})()