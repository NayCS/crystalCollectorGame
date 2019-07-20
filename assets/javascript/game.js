

$( document ).ready(function() {
    //Variables that will make game work:
    var wins = 0;
    var losses = 0;
    var counter = 0;
   // var score = 0; 
    

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      var currentScore= getRandomInt(19,120);
      console.log(currentScore)

    function reset() {
        //when wins++ or losses ++ then currentScore= reset 
        //when wins ++ or losses ++ then counter = 0
         counter = 0
         currentScore= getRandomInt(19,120);
    }
      
console.log("score:",score)

$("#redCrystal").on("click", function(){
    counter= counter+10;
    console.log(counter)
    $("#score").html(counter);


        if (counter>currentScore) {
            losses++
            document.getElementById("losses").innerHTML =losses;
            
        } else if (counter === currentScore) { 
            wins++ 
            document.getElementById("wins").innerHTML =wins;   
        } else if  ( (counter>currentScore) || (counter === currentScore) ) {
            reset()
        }
});


/*
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
*/

$("#greenCrystal").on("click", function(){
    counter= counter +6;
    console.log(counter)
    $("#score").html(counter);
        if (counter>currentScore) {
            losses++
            document.getElementById("losses").innerHTML =losses;
            
        } else if (counter === currentScore) { 
            wins++ 
            document.getElementById("wins").innerHTML =wins;   
        } else  {
        }

    
});

$("#goldCrystal").on("click", function(){
    counter = counter +4;
    console.log(counter)
    $("#score").html(counter);
        if (counter>currentScore) {
            losses++
            document.getElementById("losses").innerHTML =losses;
            
        } else if (counter === currentScore) { 
            wins++ 
            document.getElementById("wins").innerHTML =wins;   
        } else  {
        }
});

$("#blueCrystal").on("click", function(){
    counter = counter +1;
    console.log(counter)
    $("#score").html(counter);

    if (counter>currentScore) {
        losses++
          document.getElementById("losses").innerHTML =losses;
          
      } else if (counter === currentScore) { 
          wins++ 
          document.getElementById("wins").innerHTML =wins;   
      } else  {
      }
    
});


console.log(typeof counter);
console.log(typeof currentScore);

$("#score").html(counter);
$("#losses").html(losses);
$("#wins").html(wins);
$("#counter").html(currentScore);

});








