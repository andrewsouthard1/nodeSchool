var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();
var subString = str.split("\n");

console.log(subString.length - 1);