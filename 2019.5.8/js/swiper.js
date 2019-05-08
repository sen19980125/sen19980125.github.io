function swiper(obj,direction,callback){
	var x = null;
	var y = null;
	obj.addEventListener('touchstart',function(ev){
		ev = ev.changedTouches[0];
		x = ev.pageX;
		y = ev.pageY;
		
	})
	obj.addEventListener('touchend',function(ev){
		ev = ev.changedTouches[0];
		var disx = ev.pageX - x;
		var disy = ev.pageY - y;
		
		//判断方向是垂直还是水平
		if(Math.abs(disx)>=Math.abs(disy)){
			//水平方向
			if(disx>0){
				//右滑
				if(direction == 'right'){
					callback();
				}
			}else{
				//左滑
				if(direction == 'left'){
					callback();
				}
			}
		}else{
			//垂直方向
			if(disy>0){
				//下滑
				if(direction == 'down'){
					callback();
				}
			}else{
				//上滑
				if(direction == 'up'){
					callback();
				}
			}
		}
	})
}