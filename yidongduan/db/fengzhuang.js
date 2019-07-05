var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://127.0.0.1:27017/users';

var obj = {
	insert(coll,data,success,dbs){
		if(data.constructor == Array){
			//多个
			coll.insertMany(data,function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}else{
			//单个
			coll.insertOne(data,function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}
	},
	find(coll,data,success,dbs){
		coll.find(data).toArray(function(err,date){
			if(!err){
				success(date);
				dbs.close();
			}
		})
	},
	detele(coll,data,success,dbs){
		if(data.constructor == Array){
			//多个
			coll.deteleMany(data,function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}else{
			//单个
			coll.deteleOne(data,function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}
	},
	update(coll,data,success,dbs){
		if(data[2]){
			coll.updateMany(data[0],data[1],function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}else{
			coll.updateOne(data[0],data[1],function(err,result){
				if(!err&&result.result.ok == 1){
					success();
					dbs.close();
				}
			})
		}
	}
}

function fn(collection,type,data,success){
	MongoClient.connect(url,function(err,dbs){
		var db = dbs.db('users');
		var coll = db.collection(collection);
		obj[type](coll,data,success,dbs);
	})
	
}
// fn('users','update',[{},{},true],function(){
// 	
// })


module.exports = fn;