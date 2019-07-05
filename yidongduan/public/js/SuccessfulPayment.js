(function(){
	var commodity = storage.TemporaryGet('purchase')[0];
	storage.clear('list',commodity.id);
	$('.ContinueShopping').on('tap',function(){
		window.location.href = 'homepage.html';
	})
	$('.ViewOrder').on('tap',function(){
		window.location.href = 'MyOrder.html';
	})
})()