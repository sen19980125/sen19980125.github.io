var Tween = {
				linear: function (t, b, c, d){
					return c*t/d + b;
				},
				easeIn: function(t, b, c, d){
					return c*(t/=d)*t + b;
				},
				easeOut: function(t, b, c, d){
					return -c *(t/=d)*(t-2) + b;
				},
				easeBoth: function(t, b, c, d){
					if ((t/=d/2) < 1) {
						return c/2*t*t + b;
					}
					return -c/2 * ((--t)*(t-2) - 1) + b;
				},
				easeInStrong: function(t, b, c, d){
					return c*(t/=d)*t*t*t + b;
				},
				easeOutStrong: function(t, b, c, d){
					return -c * ((t=t/d-1)*t*t*t - 1) + b;
				},
				easeBothStrong: function(t, b, c, d){
					if ((t/=d/2) < 1) {
						return c/2*t*t*t*t + b;
					}
					return -c/2 * ((t-=2)*t*t*t - 2) + b;
				},
				elasticIn: function(t, b, c, d, a, p){
					if (t === 0) { 
						return b; 
					}
					if ( (t /= d) == 1 ) {
						return b+c; 
					}
					if (!p) {
						p=d*0.3; 
					}
					if (!a || a < Math.abs(c)) {
						a = c; 
						var s = p/4;
					} else {
						var s = p/(2*Math.PI) * Math.asin (c/a);
					}
					return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
				},
				elasticOut: function(t, b, c, d, a, p){
					if (t === 0) {
						return b;
					}
					if ( (t /= d) == 1 ) {
						return b+c;
					}
					if (!p) {
						p=d*0.3;
					}
					if (!a || a < Math.abs(c)) {
						a = c;
						var s = p / 4;
					} else {
						var s = p/(2*Math.PI) * Math.asin (c/a);
					}
					return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
				},    
				elasticBoth: function(t, b, c, d, a, p){
					if (t === 0) {
						return b;
					}
					if ( (t /= d/2) == 2 ) {
						return b+c;
					}
					if (!p) {
						p = d*(0.3*1.5);
					}
					if ( !a || a < Math.abs(c) ) {
						a = c; 
						var s = p/4;
					}
					else {
						var s = p/(2*Math.PI) * Math.asin (c/a);
					}
					if (t < 1) {
						return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
								Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
					}
					return a*Math.pow(2,-10*(t-=1)) * 
							Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
				},
				backIn: function(t, b, c, d, s){
					if (typeof s == 'undefined') {
					   s = 1.70158;
					}
					return c*(t/=d)*t*((s+1)*t - s) + b;
				},
				backOut: function(t, b, c, d, s){
					if (typeof s == 'undefined') {
						s = 1.70158;  //回缩的距离
					}
					return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
				}, 
				backBoth: function(t, b, c, d, s){
					if (typeof s == 'undefined') {
						s = 1.70158; 
					}
					if ((t /= d/2 ) < 1) {
						return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
					}
					return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
				},
				bounceIn: function(t, b, c, d){
					return c - Tween['bounceOut'](d-t, 0, c, d) + b;
				},       
				bounceOut: function(t, b, c, d){
					if ((t/=d) < (1/2.75)) {
						return c*(7.5625*t*t) + b;
					} else if (t < (2/2.75)) {
						return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
					} else if (t < (2.5/2.75)) {
						return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
					}
					return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
				},      
				bounceBoth: function(t, b, c, d){
					if (t < d/2) {
						return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
					}
					return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
				}
			};
 function $(str,parent){
   //parent  : 查找元素时的范围
   parent = parent || document; // 

   //先截取字符串里面的首字母
	var name = str.substring(0,1);
	var num = [];
	
	// 判断要用什么样的方式找元素
	if(name == '#'){
		var id = str.substring(1);
		return	parent.getElementById(id);
	}else if(name == '.'){
// 		var className = str.substring(1);
// 		
// 		return parent.getElementsByClassName(className);
		var all = parent.getElementsByTagName('*');
		var classname = str.substring(1);
		// 循环所有的元素
		
		each(all,function(i,el){
			
			if(el.className){//元素有classname才能进来
			
				var classStr = el.className;
				var pt = new RegExp(classname);
				if(pt.test(classStr)){
					num.push(el)
				}
			}
		})
// 		for(var i=0;i<all.length;i++){
// 			
// 			if(all[i].className){ // 判断哪些标签有class值
// 				// 进来,说明元素有class值
// 				
// 				var arr = all[i].className.split(' ');
// 				for(var j=0;j<arr.length;j++){
// 					if(arr[j] == classname){
// 						
// 						num.push(all[i])
// 					}
// 				}						
// 			}
// 		}
		
		return num;
		
	}else{
		return parent.getElementsByTagName(str);
		
	}
}

function arrRemoval(arr){  // 调用时必须是数组
	var box = [];
	for(var i=0;i<arr.length;i++){
		if(box.indexOf(arr[i]) == -1){
			box.push(arr[i])
		}
	}
	return box;
}


// 获取数组的最大值
function max(arr){
	var max = -Infinity;  // 负无穷
	for(var attr in arr){		   
	   // 3 5 67
	   if( max <= arr[attr]){
		  max =  arr[attr];
	   }
	}
	return max;
}

// 封装一个for循环的函数
function each(obj,fn){
	// obj : 数组,里面的数据是元素
	// fn : 函数
	for(var i=0;i<obj.length;i++){
		//obj[i]
		// 把传进来的函数调用
		fn(i,obj[i])
		// i 下标
		// obj[i] : 数组的数据
	}
}
function move(obj,attr,target,time,type,callback){
	/*
		obj：运动的元素
		target: 目标点
		attr : 有变化的样式
		time :运动的时间
		type : 运动的属性
	*/ 
   var t = 0;  // 次数
   var timer = null; // 存储定时器的编号
   var b = getCSS(obj,attr);   // 初始点
   var c = target - getCSS(obj,attr);
   var d = time/20;   // 总的次数
   
   // 定义定时器执行代码的次数
   timer = setInterval(function(){
	   t++;
	   //console.log(Tween[type])
	   var s = Tween[type](t, b, c, d);
	   
	   if(attr == 'opacity'){ // 判断样式的改变是否是透明度
		   obj.style[attr] = s;
	   }else{
		   obj.style[attr] = s +'px';
	   }
	   
	  
	   
	   if(t>=d){  //当达到d次,就关闭定时器
		   clearInterval(timer);
		   // 当定时器关闭，说明运动结束，在结束时调用回调函数callback
// 					   var name = typeof  callback;
// 					   console.log(name)
		  
// 					   if((typeof  callback) == 'function'){  // 判断是否有参数，参数是不是一个函数
// 						   callback()
// 					   }
			((typeof  callback) == 'function') && callback();
	   }
   },20)
}
			
function getCSS(obj,attr){
	if(obj.currentStyle){
		// ie
		return parseFloat(obj.currentStyle[attr]);
	}else{
		// 高版本浏览器
		return parseFloat(getComputedStyle(obj)[attr])
	}
}

function MoreMove(obj,attrs,time,type,callback){
	/*
	obj:元素
	attrs:样式的集合
	time:时间
	type:运动的类型
	
	*/
   var t = 0;
   var b = {};
   var c = {};
   var d = time/20;
   var timer = null;
   
   for(attr in attrs){
	   b[attr] = getCSS(obj,attr);
	   c[attr] = attrs[attr] - getCSS(obj,attr);
   }


	timer = setInterval(function(){
		t++;
		
		for(k in b){
			var v = Tween[type](t,b[k],c[k],d);
			
			if(k == 'opacity'){
				obj.style.opacity = v;
			}else{
				obj.style[k] = v+'px'
			}
		}
		if(t>=d){
			clearInterval(timer);
			(typeof callback == 'function') && callback();
		}
	},20)

}

//倒计时的函数
function countDown(futrch,obj,fn){
	var timer = null;
	clearInterval(timer);
	timer = setInterval(()=>{
		implement();
	})
	
	implement();
	function implement(){
		var date = new Date(futrch);//设置获取的时间
		var d1 = date.getTime();//把传进来的参数转换为时间戳
		var nowDate = new Date();//获取本机时间
		var d2 = nowDate.getTime();//把本机时间转为时间戳
		
		var dis = parseInt((d1-d2)/1000);//设置的时间和现在的时间差，单位秒
		
		var day = parseInt(dis/(60*60*24));//距离设置的时间还差多少天
		
		var h = parseInt((dis - day*60*60*24)/(60*60));//还剩多少小时
		var min = parseInt((dis - day*60*60*24 - h*3600)/60);//还剩多少分
		var s = dis - day*60*60*24 - h*3600 - min*60;//还剩多少秒
		
		//给传进来的标签设置内容
		obj.innerHTML = '还剩: '+toTime(day)+'天'+toTime(h)+'时'+toTime(min)+'分'+toTime(s)+'秒';
		
		if(dis == 0){//判断差值等于0的时候
		
			clearInterval(timer);//关闭定时器
			(typeof fn == 'function') && fn();//判断传进来的是不是函数，是的话调用
		}
	}
}

//补零函数
function toTime(n){//判断传进来的参数
	return n>9?n:'0'+n;//大于9，就是本身，小于9 执行'0'+n
}





//封装点击事件监听
function Event(obj,event,fn){
	
	if(obj.attachEvent){
		//进来说明是低版本ie浏览器
		obj.attachEvent('on'+event,function(){
			fn.call(obj);//改变this指向
		});
	}else{
		//进来说明不是低版本ie浏览器
		obj.addEventListener(event,fn);
	}
}

//封装，碰撞
function collision(obj,obj1){
	var boxPosition = obj.getBoundingClientRect();
	var itemPosition = obj1.getBoundingClientRect();
	
	var boxT = boxPosition.top;
	var boxR = boxPosition.right;
	var boxB = boxPosition.bottom;
	var boxL = boxPosition.left;
	
	var itemT = itemPosition.top;
	var itemR = itemPosition.right;
	var itemB = itemPosition.bottom;
	var itemL = itemPosition.left;
	
	if(itemT<=boxB&&itemR>=boxL&&itemB>=boxT&&itemL<=boxR){
		return true;
	}else{
		return false;
	}
}

//封装删除classname
function removeClass(obj,classname){
	var str = obj.className;//把传进来的classname赋值给str
	
	if(str){
		//判断是否有要删除的class
		var pt = new RegExp(classname);
		if(pt.test(str)){//进来说明匹配成功
		
			var arr = str.split(' ');//把这个classname通过空格拆分为数组
			
			var index = arr.indexOf(classname);//找到这个classname的下标
			
			arr.splice(index,1);//删除这个classname
			obj.className = arr.join(' ');//把剩下的字符串拼接好赋值给传进来的元素
		}
	}
}

//封装添加classname
function addClass(obj,className){
	var str = obj.className;
	if(str){
		//判断传进来的参数有没有classname
		var pt = new RegExp(className);
		if(!pt.test(str)){
			//已经有classname，但不是传进来的参数，就在原来的基础上添加
			obj.className = obj.className+' '+className;
		}
	}else{
		//没有classname，直接添加
		obj.className = className;
	}
}

//封装滚轮事件
		function wheel(obj,fnUp,fnDown){
			var str = window.navigator.userAgent;//获取用户信息
			
			if(str.indexOf('Firefox') != -1){//如果找到Firefox,执行下面代码
				obj.addEventListener('DOMMouseScroll',function(ev){//火狐专属滚轮事件
					
					ev.preventDefault()//清除默认行为
					// console.log(ev.detail)
					if(ev.detail>0){//datail值大于0,往下滚动,小于0,往上滚动
						//往下
						(typeof fnDown == 'function')&&fnDown();
					}else{
						//往上
						(typeof fnUp == 'function')&&fnUp();
					}
				})
			}else{
				obj.addEventListener('wheel',function(ev){//其他浏览器的滚轮事件
					ev.preventDefault()
					if(ev.wheelDelta>0){//wheelDelta大于0往上,小于0往下
						//往上
						(typeof fnUp == 'function')&&fnUp();
					}else{
						//往下
						(typeof fnDown == 'function')&&fnDown();
					}
				})
			}
		}