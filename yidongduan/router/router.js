var express = require('express');
var router = express.Router();
var db = require('../db/fengzhuang.js');
var bodyParser = require('body-parser');
var body = bodyParser.urlencoded({extends:true});

//登录请求
router.post('/login',body,function(req,res){
	db("userinfo",'find',req.body,function(data){
		if(data.length){
			res.send({
				err:0,
				success:'登录成功',
				ok:1
			})
		}else{
			res.send({
				err:1,
				success:'账户密码不存在，请注册',
				ok:0
			})
		}
	})
})

//注册请求
router.post('/registration',body,function(req,res){
	db("userinfo",'find',req.body,function(data){
		if(data.length){
			res.send({
				err:1,
				success:'注册失败，该用户已被注册',
				ok:0
			})
		}else{
			db('userinfo','insert',{
				username:req.body.username,
				pass:req.body.pass,
				time:new Date().getTime()
			},function(){
				res.send({
					err:0,
					success:'注册成功',
					ok:1
				})
			})
		}
	})
})

//获取用户信息
router.post('/getUserInfo',body,function(req,res){
	console.log(req.body);
	db('userinfo','find',req.body,function(data){
		if(data.length){
			res.send({
				err:0,
				data:data[0],
				ok:1
			})
		}else{
			res.send({
				err:1,
				data:[],
				ok:0
			})
		}
	})
})

module.exports = router;