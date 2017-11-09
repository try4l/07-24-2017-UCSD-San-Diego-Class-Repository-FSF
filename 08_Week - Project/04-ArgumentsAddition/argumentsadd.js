// Combines two command line arguments (strings).
console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
//console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
node 04-ArgumentsAddition/argumentsadd.js 2 2

var process.argv = [
"node",
"04-ArgumentsAddition/argumentsadd.js",
"2",
"2"
];
