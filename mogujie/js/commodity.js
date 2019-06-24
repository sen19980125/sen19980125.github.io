AandS()
function AandS(){
	var reduce = $('.reduce');
	var Plus = $('.Plus');
	var intotal = $('.intotal');
	var num = 1;
	Plus.on('click',function(){
		num++;
		intotal.html(num);
	})
	reduce.on('click',function(){
		num--;
		if(num<=1){
			num = 1;
		}
		intotal.html(num);
	})
	
	//获取全部小图片
	var mini = $('.mini a');
	var big_picture = $('.big_picture img');
	// console.log(mini);
	$.each(mini,function(i,el){
		$(el).on('mouseenter',function(){
			mini.removeClass('looming');
			$(this).addClass('looming')
			big_picture.removeClass('cj');
			big_picture.eq(i).addClass('cj');
		})
	})
}