//app.js

var modThree = require('./modThree.js');

var stdin = process.openStdin();

stdin.addListener("data", function(d) {;
	var poop = modThree.modThree_0(d.toString().trim());
	console.log(modThree.modThree_1(poop));
})