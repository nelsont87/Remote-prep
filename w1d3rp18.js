var i=0;
var N = 0;
while(i<N){

  console.log("Welcome " + (i+1) + "");
  if(i > 0) {
    console.log(", meet");

    var j=0;
    while(j<i){
      if(j > 0){
        if(j == i-1){
          console.log(" and" );
        }else{
          console.log(" ," );
        }
      }
      console.log(" " + (j+1));
      j++
    }
  }
  console.log("\n" );
  i++;
}