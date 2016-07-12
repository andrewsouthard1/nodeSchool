var fs = require("fs");
var numNewlines = undefined;

function findNewLines(callback){
	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents){
		numNewlines = fileContents.split("\n");
		callback();
	});
};

function logNewLines(){
	console.log(numNewlines.length - 1);
}

findNewLines(logNewLines);