//var msg='开始学习node';
//console.log(msg);

var fs = require('fs')
fs.readFile('./1.txt',function(error,data){
	
	
//	console.log(data)   //需要转化为字符串
	console.log(data.toString())
})
