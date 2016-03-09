// loop and print out 1-5
// loop and count up 1-4 while printing out in the same line
// add in syntax
var n = 5;
var i = 1;
var j = 1;
var intro = '';

while(i <= n) {
	while(j < i ){
			if(j === 1){
				intro += ", meet";
			}
			if(j === i - 1 && j > 1){
				intro += ",";
			}
			intro += " " + j;
			j++;
		}
	console.log("welcome " + i + intro);
	i++;
}




