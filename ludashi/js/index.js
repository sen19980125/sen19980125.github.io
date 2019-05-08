window.onload = function(){
	var btn_left = $('.btn_left')[0];
	var btn_right = $('.btn_right')[0];
	var banner = $('.banner')[0];
	var banner_bj = $('.banner_bj')[0];
	var banner_bj_li = $('li',banner_bj);
	var index = 10;
	var num = 0;
	var onoff = true;
	
	//banner_content
	var banner_content = $('.banner_content')[0];
	var banner_content_li = $('li',banner_content);
	var banner_content_img = banner_content.getElementsByTagName('img');
	
	/*banner_footer*/
	var banner_bj_btn = $('.banner_bj_btn')[0];
	var banner_bj_btn_li = $('li',banner_bj_btn);
	
	banner.onmousemove = function(){
		btn_left.style.display = 'block';
		btn_right.style.display = 'block';
	}
	banner.onmouseleave = function(){
		btn_left.style.display = 'none';
		btn_right.style.display = 'none';
	}
	
	btn_right.onclick = function(){
		if(onoff){
				onoff = !onoff;
				index++;
				removeClass(banner_bj_li[num],"show");
				removeClass(banner_content_li[num],"active");
				removeClass(banner_bj_btn_li[num],"color");
				num++;
				num = num%banner_bj_li.length;
				addClass(banner_bj_li[num],"show");
				addClass(banner_content_li[num],"active");
				addClass(banner_bj_btn_li[num],"color")
			setTimeout(function(){
				onoff = !onoff;
			},1000)
		}
	}
	
	btn_left.onclick = function(){
		if(onoff){
				onoff = !onoff;
				index++;
				removeClass(banner_bj_li[num],"show");
				removeClass(banner_content_li[num],"active");
				removeClass(banner_bj_btn_li[num],"color");
				num--;
				if(num<0){
					num = banner_bj_li.length-1;
				}
				addClass(banner_bj_li[num],"show");
				addClass(banner_content_li[num],"active");
				addClass(banner_bj_btn_li[num],"color");
			setTimeout(function(){
				onoff = !onoff;
			},1000)
		}
	}
	
	each(banner_bj_btn_li,function(i,el){
		el.onclick = function(){
			removeClass(banner_bj_li[num],"show");
			removeClass(banner_content_li[num],"active");
			removeClass(banner_bj_btn_li[num],"color");
			num++;
			num = num%banner_bj_li.length;
			addClass(banner_bj_li[i],"show");
			addClass(banner_content_li[i],"active");
			addClass(banner_bj_btn_li[i],"color");
		}
	})
	
	
}
