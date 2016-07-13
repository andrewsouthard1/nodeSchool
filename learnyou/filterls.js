var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function callback(err, list){
	if(err){
		console.log("ERROR");
	}else{
		var ext = path.extname(list);
		if(ext){
			console.log(list);
		}
	}
})