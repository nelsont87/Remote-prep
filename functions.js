// var time = function(){
// 	var now = new Date();
// 	console.log("Hello, it is " + now);
// }
// time();
// time();
// time();

// var message = function(){
//   $('body').append('<div id="output"></div>');
//   $('#output').append('This is the GREATEST THING EVER!!!!!');
// }
// message();
// message();
// message();

// var greeter = function() {
// 	return 'Hello';
// };

// //saving the return value
// var greeting = greeter();

// //what value does the variable greeting hold;

// //using the return value to compose larger expressions
// console.log(greeting + ", nice to meet you.");

// //what's the difference here?
// console.log(greeter() + ", nice to meet you.");

// var saying_generator = function() {
// 	var phrase = "Heeey, " + "it's the " + " Fonz.";
// 	return phrase;
// };

// //What is the return value?
// var saying = saying_generator();
// console.log(saying);

// var broken_saying_generator = function() {
// 	var phrase = "Heeey, " + "it's the " + " Fonz.";
// 	phrase;
// };

// //What about now?
// var broken_saying = broken_saying_generator();
// console.log(broken_saying);
// *************************************************************
// var get_sentence = function(){

// 	var random_num = Math.ceil((Math.random() * 2));
// 	if(random_num === 1){
// 		var sentence_one = "You will learn something new today!";
// 		return sentence_one;
// 	} else if (random_num === 2) {
// 		var sentence_two = "Today, you will smile a ton of time!";
// 		return sentence_two;
// 	}
// };

// var i = 0;
// while (i < 10){
// 	// var new_sentence = get_sentence();
// 	$('body').append('<p>'+ get_sentence() + '</p>');
// 	// $('p').append(new_sentence);
// 	i++;
// }

// var inspector = function() {
// 	console.log(arguments);
//
// };


//try each invocation individually and ponder the result
// inspector(3);
// inspector(3+7, 1);
// inspector(3, 7);
//
// inspector('hello');
// inspector('hello' + ' ' + "how are you");
// inspector('hello', 'how are you');
//
// inspector('hello', 7, true, undefined, null, 3 + 12, "nice to" + "meet you");

// var log_and_return = function() {

// 	console.log(arguments);

// 	return arguments;
// };
// var returned_values = log_and_return(5,"hello");
// log_and_return(returned_values);
//

// var value_logger = function (value){
//   console.log(value);
// };

// value_logger("Howdy ho, neighborino!");

// // parameters and variables defined in function invocations are local to that invocations
// //value;  // ReferenceError: No variable 'value' exists

// value_logger(3 + 7);

// // where's the seven?
// value_logger(3, 7);

// var doubler = function (num) {
//   return num * 2;
// };

// // is it ten?
// var should_be_ten = doubler(5);
// console.log(should_be_ten);

// var double_value_logger = function (value1, value2) {
//   console.log(value1, value2);
// };

// double_value_logger("hello", "how are you");

// // what is value2?
// double_value_logger("hello");

// var add = function(num1, num2){
//   return num1 + num2;
// };

// var sum = add(7, 12);
// console.log(sum);

// var tripler = function(num){
// 	return num * 3;
// };
// console.log(tripler(4));

// var multiply = function(num1, num2){
// 	return num1 * num2;
// };

// console.log(multiply(2 , 4));

// var divide = function(num1, num2){
// 	return num1 / num2;
// };
// console.log(divide(4, 2));

// var remainder = function(num1, num2){
// 	return num1 % num2;
// };
// console.log(remainder(5, 2));

// console.log(remainder(divide(multiply(12,tripler(5)), 2), 3));
// console.log(remainder(divide(multiply(12,tripler(6)), 2), 5));
// console.log(remainder(divide(multiply(12,tripler(7)), 2), 5));
// console.log(remainder(divide(multiply(12,tripler(8)), 2), 5));

$('body').append('<div id="output"></div>');

var string_printer = function(str){
	$('#output').append(str + '<br>');
};

string_printer('This is test one');
string_printer('This is another test');
string_printer('Wow, one more test');

var funny_sentence = function(noun, adjective, verb, adverb){
  var empStr = "The " + noun + " went to the " + adjective + " house " + verb  + " it " + adverb;
  $('body').append(empStr);
};
funny_sentence("mike", "heavy", "running", "jumping");


