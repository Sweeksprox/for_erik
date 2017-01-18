//module three
var modOne = require('./modOne.js');
var modTwo = require('./modTwo.js');

exports.modThree_0 = function(number) {
	return modTwo.modTwo(modOne.modOne(number, number*100));
}

exports.modThree_1 = function(number) {
	return "Account Balance: " + number;
}