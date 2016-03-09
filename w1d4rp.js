var invited = 5;
var guestsAtParty = 0;
var arrv =1;
var greeting;
var i;
while(arrv <= invited){
    greeting = "Welcome " + arrv;
    guestsAtParty++;
    i = 1;
    if(arrv == 1){
        greeting = "Hello " + arrv + " you are my first guest! Come in.";
    }
    while(i < guestsAtParty){
        if(i==1){
            greeting += ", meet " + i;
        }
        if(i < (guestsAtParty - 1) && i > 1){
            greeting += ", " + i;
        }
        if(i == (guestsAtParty - 1) && i > 1){
            greeting += " and " + i;
        }
        i++;
    }
    arrv++;
    console.log(greeting);
}