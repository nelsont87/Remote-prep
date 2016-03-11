// var my_cat = {};

// my_cat.name = "fluffy";
// my_cat.age = 2;
// my_cat.alive = true;
// my_cat.black = false;
// my_cat.food = "chicken";
// my_cat.favorite_toy = "triangle";
// my_cat.legs = 4;

// console.log(my_cat);

// var human = {};
// human['name'] = 'bob';
// human['age'] = 75;

// var property = 'age';

// // what property key are we referencing here? what is its value?
// console.log(human[property]);

// property = 'location';

// // at what key will we find the value "San Francisco"?
// human[property] = 'San Francisco';
// console.log(human.location);

// var my_dream_life = {};
// var my_property_key = "job";
// my_dream_life[my_property_key] = "lion tamer";
// var another_property_key = "salary";
// my_dream_life[another_property_key] = 14446;
// // console.log(my_dream_life[property_key]);
// console.log(my_dream_life["job"]);
// var next_property = "car";
// my_dream_life[next_property] = "malibu";
// console.log(my_dream_life[next_property]);
// console.log(my_dream_life["car"]);
// var some_property = "location";
// my_dream_life[some_property] = "Taiwan";
// console.log(my_dream_life["location"]);

// var car = {
//   make: "Toyota"
// };

// car["model"] = "Camry";
// car["model"];
// car.model;

// car.model = "Prius";
// car["model"];
// car.model;

// var prop = 'year';
// // how can we set the car's year using the variable prop?
// car.prop = 2014;
// console.log(car.prop);

// console.log(car['nothing_here']);
// console.log(car.nothing_here);

// var dreamCar = {};
// dreamCar.make = "lamborghini";
// dreamCar.model = "sesto elemento";
// dreamCar.color = "black";
// dreamCar.year = 2011;
// dreamCar.registered = true;

// console.log(dreamCar);

// var demo_object = {
//     one: 1,
//     two: 2,
//     three: 3
// };
// var one = "three";

// console.log(demo_object['two']); // 2
// console.log(demo_object[one]); // "3"

// var state_capitals = {
//     California: 'Sacramento',
//     Texas: 'Austin'
// };

// var place = 'California';

// console.log(state_capitals['place']); // 'undefined'
// console.log(state_capitals.place);   // 'undefined'
// console.log(state_capitals[place]); // 'Sacramento'

// console.log(state_capitals['California']); // 'Sacramento'
// console.log(state_capitals.California);   // 'Sacramento'
// console.log(state_capitals[California]); // error

var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
    'spaces-and-dashes can be used': ' but need to have quotes'
};

// for (var key in obj) {
//     console.log(obj[key]); //why don't we need quotes around key??
//     // what would iappen if we logged obj.key instead? Why? Test it.
// };


// for (var adj in my_cat){
// 	console.log(my_cat[adj]);
// };


// for (var adj in dreamCar){
// 	console.log(dreamCar[adj]);
// };


// for (var adj in my_dream_life){
// 	console.log(my_dream_life[adj]);
// };

// for (var color in obj) {
// 	if (color === 'color'){
// 		$('body').append('<div id = "special"></div>');
// 		$('#special').append(obj[color]);
// 	}
// }


// for (var direction in obj) {
// 	if (obj[direction] === 'down'){
// 		$('body').append('<div id = "special"></div>');
// 		$('#special').append(obj[direction]);
// 	}
// }

// var target_key = "greeting";

// for (var key in obj){
// 	if(key === target_key){
// 		$('body').append('<div id = "special"></div>');
// 		$('#special').append(obj.greeting);
// 	}
// }

// var numbers = [2, 4, 5, 37, 0];
// var doubled_numbers = {}; // should be { 2: 4, 4: 8, 5: 10, 37: 74, 0: 0 }
// for (var i = 0; i < numbers.length; i++){
// 	doubled_numbers[numbers[i]] = numbers[i] * 2;
// }
// console.log(doubled_numbers);

// var greeting = "Hello and welcome!";

// greeting[0]; // "H"

// !!greeting.match("welcome"); // true
// !!greeting.match("goodbye"); // false

// var words = greeting.split(' ');

var favorites = [];

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
    'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];

for (var i = 0; i < famous.length; i++){
	if(famous[i][0] === 'a'){
		favorites += famous[i] + " ";
	}
}
console.log(favorites);

var obama_jobs = [];

var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

for(var infamous in politicos){
	famous += ", " + politicos[infamous];
}

console.log(famous);


for(var job in politicos){
	
}










































