run = function(math, return_input_id){
    var Algebrite = require('algebrite');
    var ans = Algebrite.run(math);
	var ansinfo = {result: ans, nonce: Math.random()}
	Shiny.onInputChange(return_input_id, ansinfo );
}
simplify = function(math, return_input_id){
    var Algebrite = require('algebrite');
    var ans = Algebrite.simplify(math).toString();
	var ansinfo = {result: ans, nonce: Math.random()}
	Shiny.onInputChange(return_input_id, ansinfo );
}
diffrentiate = function(math, degree, return_input_id){
    var Algebrite = require('algebrite');
    var simpleMath = Algebrite.simplify(math).toString();
	var ans = Algebrite.derivative(simpleMath, degree).toString();
	var ansinfo = {result: ans, nonce: Math.random()}
	Shiny.onInputChange(return_input_id, ansinfo );
}
integrate = function(math, degree, return_input_id){
    var Algebrite = require('algebrite');
    var simpleMath = Algebrite.simplify(math).toString();
	var ans = Algebrite.integral(simpleMath, degree).toString();
	var ansinfo = {result: ans, nonce: Math.random()}
	Shiny.onInputChange(return_input_id, ansinfo );
}