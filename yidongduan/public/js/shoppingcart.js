// (function(){
// 		var data = window.localStorage;
// 		//拿到本地存储的数据之后渲染到购物车
// 		data = Object.values(data);
// 		for(var i=0;i<data.length;i++){
// 			var json = JSON.parse(data[i]);
// 			var li = $('<li sign="'+json.id+'">'+
// 							'<div>'+
// 								'<input type="checkbox"/>'+
// 								'<img src="img/car02.png"/>'+
// 							'</div>'+
// 							'<div>'+
// 								'<h3>'+json.title+'</h3>'+
// 								'<p>'+json.introduce+'</p>'+
// 								'<p>'+
// 									'<b>¥&nbsp;'+json.price+'.00</b>'+
// 									'<span class="reduce">＜</span>'+
// 									'<span class="total">1</span>'+
// 									'<span class="plus">＞</span>'+
// 								'</p>'+
// 							'</div>'+
// 						'</li>');
// 			$('.list').append(li);
// 			console.log(li);
// 			
// 			li.find('.inp').on('input',function(){
// 				console.log(this.checked,this)
// 			})
// 			
// 			
// 		}
// 		//操作添加的商品
// 		// $('.list li input').on('tap',function(){
// 		// 		var onoff = this.checked;
// 		// 		var lis = $(this).parents('li');
// 		// 		var sign = lis.attr('sign');
// 		// 		console.log(onoff);
// 		// 		if(!onoff){
// 		// 			//已选择
// 		// 			//实现清理功能
// 		// 			$('#clear').on('tap',function(){
// 		// 				lis.remove();
// 		// 				window.localStorage.removeItem(sign);
// 		// 			})
// 		// 		}else{
// 		// 			//没有选择
// 		// 		}
// 		// 	
// 		// })
// 		// $('.list li').on('tap',function(){
// 		// 	var input = $(this).find('#check');
// 		// 	var onoff = input.is(':checked');
// 		// 	var sign = $(this).attr('sign');
// 		// 	var that = $(this);
// 		// 	//console.log(onoff);
// 		// 	if(!onoff){
// 		// 		console.log(1)
// 		// 		//勾选了
// 		// 		//实现清理功能
// 		// 		$('#clear').on('tap',function(){
// 		// 			that.remove();
// 		// 			window.localStorage.removeItem(sign);
// 		// 		})
// 		// 	}else{
// 		// 		//没勾选
// 		// 		console.log(2)
// 		// 		
// 		// 	}
// 		// })
// 		//选择商品数量
// 		
// 		var pluss = $('.list li .plus');
// 		var reduce = $('.list li .reduce');
// 		$.each(pluss,function(i,item){
// 			var num = 1;
// 			$(this).on('tap',function(){
// 				num++;
// 				$(this).siblings('.total').html(num);
// 			})
// 		})
// 		$.each(reduce,function(i,item){
// 			
// 			$(this).on('tap',function(){
// 				var num = $(this).siblings('.total').html();
// 					num = parseInt(num);
// 					num--;
// 					if(num<=1){
// 						num = 1;
// 					}
// 					$(this).siblings('.total').html(num);
// 			})
// 		})
// 	//shoppingcart();
// 	function shoppingcart(){
// 		$('.checkout .settlement').on('tap',function(){
// 			var off = $('.list li input').is(":checked");
// 			console.log(off)
// 			if(off){
// 				//勾选了
// 				//跳转到结算页面
// 				window.location.href = 'PurchasePage.html';
// 			}else{
// 				//没有勾选
// 				$('.success').html('请选择需要购买的商品').animate({
// 					transform:"scale(1)"
// 				},500,function(){
// 					setTimeout(function(){
// 						$('.success').animate({
// 							transform:"scale(0)"
// 						},500)
// 					},1000)
// 				})
// 			}
// 		})
// 	}
// })()
(function(){
	var json = storage.get('list');
	let vm = new Vue({
		el:'#app',
		data:{
			json,
			allSelct:false,
			judge:false
		},
		methods:{
			reduce:function(item){
				if(item.num != 1){
					item.num--;
					var arr = this.json.filter(function(data,index){
						if(item.id == data.id){
							return data.id;
						}
					});
					storage.reduce('list',arr[0].id);
				}
			},
			increase:function(item){
				item.num++;
				var arr = this.json.filter(function(data,index){
					if(item.id == data.id){
						return data.id;
					}
				});
				storage.addto('list',arr[0].id);
			},
			clear:function(){
				
				var newData = this.json.filter(function(data,index){
					return data.isDelete;
				});
				storage.clear('list',newData[0].id);
				//筛选掉item.isDelete等于true
				var arr = this.json.filter(function(item,i){
					return !item.isDelete;
				});
				this.json = arr;
			},
			AllElection:function(ev){
				this.allSelct = ev.target.checked;
				if(this.allSelct){
					var arr = this.json.map(function(item,i){
						return {
							name:item.name,
							info:item.info,
							img:item.img,
							price:item.price,
							id:item.id,
							num:item.num,
							isDelete:true
						}
					});
					this.json = arr;
				}else{
					var arr = this.json.map(function(item,i){
						return {
							name:item.name,
							info:item.info,
							img:item.img,
							price:item.price,
							id:item.id,
							num:item.num,
							isDelete:false
						}
					});
					this.json = arr;
				}
			},
			monitor:function(){
				// if(this.judge){
				// 	$('.checkout input')[0].checked = this.judge;
				// }
			},
			settlement:function(){
				var onoff = this.json.some(function(item,i){
					return item.isDelete
				});
				if(onoff){
					var newData = this.json.filter(function(item,i){
						return item.isDelete;
					});
					console.log(newData[0].id);
					storage.temporary('purchase',newData[0]);
					window.location.href = 'PurchasePage.html';
				}else{
					$('.success').html('请选择需要购买的商品').animate({
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
			back:function(){
				window.history.back();
			}
		},
		computed:{
			checked(){
				var onoff = this.json.every(function(item){
					return item.isDelete
				})
				//console.log(onoff);
				this.judge = onoff;
				$('.checkout input')[0].checked = onoff;
			}
		}
	})
})()