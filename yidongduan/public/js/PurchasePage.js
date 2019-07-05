(function(){
	var json = storage.TemporaryGet('purchase');
	let vm = new Vue({
		el:'#app',
		data:{
			json
		},
		methods:{
			back:function(){
				window.sessionStorage.removeItem('purchase')
				window.history.back();
			},
			submission:function(){
				window.location.href = 'cashier.html';
			}
		}
	});
	purchase();
	function purchase(){
		var price = $('.UnitPrice').html().substring(1).split('.')[0];
		var num = $('.total').html();
		$('.TotalPrice').html('¥'+(parseInt(price)*parseInt(num)));
	}
})()