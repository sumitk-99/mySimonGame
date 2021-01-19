var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level=0;
var started = 0;


//7
$(document).keydown(function(){
  if(started === 0){
  nextSequence();
  started++;}
});



function nextSequence(){
  userClickedPattern= [];
  level++;

  $("h1").text("Level "+ level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  }

$(".btn").click(function()
{
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//6
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//8
function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel] === gamePattern[currentLevel])
   {
     console.log("success");

     if(userClickedPattern.length === gamePattern.length){


       setTimeout(function(){
         nextSequence();
       },1000);
     }
}
     else{
       console.log("wrong");

       playSound("wrong");

       $("body").addClass("game-over");

       setTimeout(function(){
         $("body").removeClass("game-over");
       },200);

       $("h1").text("Game Over, Press Any Key to Restart");
       startOver();

   }
}

//10
function startOver(){
  level=0;
  started=0;
  gamePattern=[];
}
