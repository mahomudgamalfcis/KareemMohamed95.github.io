run = function (math, return_input_id) {
  var Algebrite = require('algebrite');
  var ans = Algebrite.run(math);
  var ansinfo = { result: ans, nonce: Math.random() }
  Shiny.onInputChange(return_input_id, ansinfo);
}
simplify = function (math, return_input_id) {
  var Algebrite = require('algebrite');
  var ans = Algebrite.simplify(math).toString();
  var ansinfo = { result: ans, nonce: Math.random() }
  Shiny.onInputChange(return_input_id, ansinfo);
}
simplify_list = function (math_list, return_input_id) {
  var Algebrite = require('algebrite');
  math_list_array = math_list.split(" ");
  var ansinfo = { nonce: Math.random() }
  var ans;
  for (var i = 0; i < math_list_array.length; i++) {
    ans = Algebrite.simplify(math_list_array[i]).toString();
    ansinfo[["result" + ((i + 1).toString())]] = ans;
  }
  Shiny.onInputChange(return_input_id, ansinfo);
}
diffrentiate = function (math, degree, return_input_id) {
  var Algebrite = require('algebrite');
  var simpleMath = Algebrite.simplify(math).toString();
  var ans = Algebrite.derivative(simpleMath, degree).toString();
  var ansinfo = { result: ans, nonce: Math.random() }
  Shiny.onInputChange(return_input_id, ansinfo);
}
diffrentiate_list = function (math_list, degree, return_input_id) {
  var Algebrite = require('algebrite');
  math_list_array = math_list.split(" ");
  var ansinfo = { nonce: Math.random() }
  var ans;
  for (var i = 0; i < math_list_array.length; i++) {
    ans = Algebrite.derivative(math_list_array[i], degree).toString();
    ansinfo[["result" + ((i + 1).toString())]] = ans;
  }
  Shiny.onInputChange(return_input_id, ansinfo);
}
integrate = function (math, degree, return_input_id) {
  var Algebrite = require('algebrite');
  var simpleMath = Algebrite.simplify(math).toString();
  var ans = Algebrite.integral(simpleMath, degree).toString();
  var ansinfo = { result: ans, nonce: Math.random() }
  Shiny.onInputChange(return_input_id, ansinfo);
}