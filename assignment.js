// var word = 'Hello';

// console.log(word[0]);
// console.log(word[1]);
// console.log(word[4]);
// console.log(word[5]);

// var index = 3;
// console.log(word[index]);

// var len = word.length;
// console.log(word[len]);
// console.log(word[len - 1]);

// var greeting = "Hello and welcome to my webpage!";

// console.log(greeting[0]);
// console.log(greeting[1]);
// console.log(greeting[28]);
// console.log(greeting[29]);

// var index = 2;
// console.log(greeting[index]);

// var len = greeting.length;
// console.log(greeting[len]);
// console.log(greeting[len - 1]);

// var nums = [5, 10, 20, 50, 100, 250];

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[5]);
// console.log(nums[6]);

// var index = 4;
// console.log(nums[index]);

// var len = nums.length;
// console.log(nums[len]);
// console.log(nums[len - 1]);

// var all_kinds_of_stuff = ["Hello", 3, undefined, true, ["woah", "dude"], null];

// console.log(all_kinds_of_stuff[0]);
// console.log(all_kinds_of_stuff[1]);
// console.log(all_kinds_of_stuff[5]);
// console.log(all_kinds_of_stuff[6]);

// var another_array = all_kinds_of_stuff[4];

// console.log(another_array[0]);

// console.log(all_kinds_of_stuff[4][1]);

// creating a new instance of an array is called instantiation
// var arr = [];

// we can use bracket access in conjunction w/ the assignment operator
// to store a new value at that index
// arr[0] = "0 is the new 1";
// arr[1] = 45;
// arr[2] = null;
// arr[3] = true;

// arr[1] = "overwrite 45, just forget about that one, okay?";

// var recipe = ["protein", "carb", "vegetable", "boba"];
// recipe[4] = "cereal";

// console.log(recipe[0]);
// var last_step = recipe.length - 1;
// console.log(recipe[last_step]);

// var arr = ['stuff','more stuff','even more stuff'];

// console.log(arr.length);

// arr.push("More on the end!!!");
// console.log(arr);
// var lastItem = arr.pop();
// console.log(lastItem);

// arr.unshift("More at the beginning!!");
// console.log(arr);
// var firstItem = arr.shift();
// console.log(firstItem);
// console.log(arr);

// var bucket_list = [];
// bucket_list[0] = "Get into HR";
// bucket_list[1] = "Become a software engineer";

// bucket_list.push("skydiving", "learn Javascript");

// bucket_list.unshift("getting fit", "get good at LoL");

// console.log(bucket_list.length);

// var dying_wish = bucket_list.pop();

// var do_it_now = bucket_list.shift();

// console.log(bucket_list.length);
// console.log(dying_wish);
// console.log(do_it_now);

// var i = 0;
// var words = ['raymond and nelson'];

// while (i < words.length) {
//   console.log(words[i]);
//   i++;
// }

// var i = 0;
// while(i < recipe.length){
//   $('body').append(recipe[i] + " ");
//   i++;
// };
// var j = 0;
// while(j < bucket_list.length){
//   $('body').append(bucket_list[j] + " ");
//   j++;
// };

// var append_strings = function(array, output) {
//   var i = 0;
//   while (i < array.length) {
//     $(output).append(array[i] + " ");
//     i++;
//   }
// }

// append_strings(recipe, 'body');
// append_strings(bucket_list, '.output');  

// var str = "one two three";
// var arr = str.split(' '); // array
// var new_str = arr.join(' and a '); // string
// console.log(new_str);

// //now our turn...
// var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

// var scrambled_array = scrambled_poem.split(' ')
// var unscrambled_array;
// while (scrambled_array.length> 0) {
//   unscrambled_array += scrambled_array.shift() + " "; 
//   unscrambled_array += scrambled_array.pop() + " ";
// }
// console.log(unscrambled_array);

// var reverser = function(array) { 
//   var reversed_array = [], i, arrlen = array.length;
//   for(i = 0; i < arrlen ; i++) {
//     reversed_array[i] = array.pop();
//   }
//   return reversed_array;
// };

// console.log(reverser([1, 2, 3, 4, 5, 6]));

// var reverser = function(array) {
//   for(var i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//   }
// };

// reverser([1, 2, 3, 4]);

// var log_me = function(word){
//   console.log(word);
// };
// words.forEach(log_me);


// var arr2 = arr;
// arr2.pop(); // both arr and arr2 are changed!!

// var arr3 = arr.slice(); // clones the array
// arr3.pop(); // only arr3 is changed

// var array_duplicator = function(inputArray){
// 	var outputArray = [];
// 	outputArray = inputArray.slice();
// 	return outputArray;
// }

// var original = [ 1, 2, 3, 4];
// var duplicated = array_duplicator(original);

// duplicated.pop();
// duplicated.pop();
// duplicated.pop();

// console.log(original, duplicated); //should not be the same!

// var friends = ['ada', 'will', 'bianca', 'abe'];
// var enemies = ['john', 'alice'];

// var frenemies = friends.concat(enemies);

// console.log(frenemies);
// console.log(friends, enemies);	//does not change original arrays!

// var array_combiner = function(array1, array2) {
// 	var combo = array1.concat(array2);
// 	return combo;
// }

// var combined_array = array_combiner([1,2,3], [4,5,6]);
// console.log(combined_array);

// var frenemies = ['ada', 'will', 'bianca', 'abe', 'john', 'alice'];
// var starting_at_index = 3;
// var number_to_remove = 2;

// var removed_elements = frenemies.splice(starting_at_index, number_to_remove);

// console.log("We took out ", removed_elements);
// console.log("The remaining array ", frenemies);
















