

var storage={
	set:function(name,data){
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr);
		}else{
			arr = [];
		}
		
		var onoff = arr.some(function(item,index){
			return data.id == item.id
		})
			
			
		if(onoff){
			var num = null;
			arr.map(function(item,index){
				if(item.id == data.id){
					num = index
				}				
			})
			arr[num].num = arr[num].num+1;
			
		}else{
			arr.push(data);	
		}
		window.localStorage.setItem(name,JSON.stringify(arr));
	},
	get:function(name){
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr)
		}else{
			arr = [];
		}
		return arr;
	},
	reomve:function(name,id){
		var arr = window.localStorage.setItem(name);
		arr = JSON.parse(arr);
		
		var list = arr.filter(function(item,index){
			
			return item.id != id
		})
		
		window.localStorage.setItem(name,JSON.parse(list))
		
	},
	reduce:function(name,id){
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr);
		}
		var onoff = arr.some(function(item,index){
			return id == item.id
		})
		if(onoff){
			var num = null;
			arr.map(function(item,index){
				if(item.id == id){
					num = index
				}				
			})
			arr[num].num = arr[num].num-1;
		};
		window.localStorage.setItem(name,JSON.stringify(arr));
	},
	addto:function(name,id){
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr);
		}
		var onoff = arr.some(function(item,index){
			return id == item.id
		})
		if(onoff){
			var num = null;
			arr.map(function(item,index){
				if(item.id == id){
					num = index
				}				
			})
			arr[num].num = arr[num].num+1;
		};
		window.localStorage.setItem(name,JSON.stringify(arr));
	},
	clear:function(name,id){
		console.log(id)
		var arr = window.localStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr);
		}
		var onoff = arr.some(function(item,index){
			return id == item.id
		})
		if(onoff){
			
			var newArr = arr.filter(function(item,i){
				return id != item.id
			})
		};
		window.localStorage.setItem(name,JSON.stringify(newArr));
	},
	temporary:function(name,data){
		var arr = window.sessionStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr);
		}else{
			arr = [];
		}
		
		var onoff = arr.some(function(item,index){
			return data.id == item.id
		})
			
			
		if(onoff){
			var num = null;
			arr.map(function(item,index){
				if(item.id == data.id){
					num = index
				}				
			})
			arr[num].num = arr[num].num+1;
			
		}else{
			arr.push(data);	
		}
		window.sessionStorage.setItem(name,JSON.stringify(arr));
	},
	TemporaryGet:function(name){
		var arr = window.sessionStorage.getItem(name);
		if(arr){
			arr = JSON.parse(arr)
		}else{
			arr = [];
		}
		return arr;
	}
}

