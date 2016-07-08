var cmdLineArgs = (process.argv)
var sum = 0;

for(var i = 2; i<cmdLineArgs.length; i++){
	sum += Number(cmdLineArgs[i]);
};

console.log(sum);
