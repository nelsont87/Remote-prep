//actual game. Game of roulette number 0-36 using a randomly generated number.
//take input of bet and amount bet on a number.
//have minimum of $5 bet. Starting stack $500.
//Keep track of the stack, spit out the winnings and spit out the winning number.
var stack = 500;
var winNum;
$('.display-credit').html(stack + " in the bank.");

var playing = true;

while(playing){
	//Produce a random number 0-36
	var rouletteNum = function(max, min){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	winNum = rouletteNum(36,0);

	//getting the bet amount from the player
	var bet = prompt("How much would you like to bet? (Minimum of 5 bitcoins)");
	while(!bet){
		bet = prompt("Please enter a bet");
	};
	//ensuring minimum bet is 5 bitcoins
	while(bet < 5){
		bet = prompt("Minimum bet is 5 bitcoins");
	};
	//getting the number the player is placing the bet on
	var betNum = prompt("What number would you like to bet on?");
	while(!betNum){
		betNum = prompt("Please enter a number");
	};
	//ensuring that the placed bet is a number from 0-36
	if(betNum > 36){
		betNum = prompt("Your number is too high, please choose a number from 0-36");
	}
	else if (betNum < 0){
		betNum = prompt("There are no negative numbers, please choose a number from 0-36");
	}
	$('.display-pick').html(betNum);

	var winnings = 0;
	//calculating the stack after win or lose.
	if(betNum === winNum){
		winnings += bet * 35;
		stack += winnings;
	}
	else {
		stack = stack - bet;
	};

	if(stack === 0 || stack < 5){
		alert("You have insufficent funds, please refresh the page and try again");
	}
alert("Your stack is at " + stack);
playing = confirm("Keep playing?");
$('.display-credit').html(stack + " in the bank.");

}

console.log(stack);






// $(.display-credit).html(stack)






