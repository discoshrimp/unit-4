//global object

var crystalCalc={
"red": 0,
"blue":0, 
"yellow": 0,
"green":0,
"computer": 0,
}
var totalScore=0;
var wins=0;
var losses=0;
var clicks=10;

//Functions
function reset(){
    totalScore=0;
    clicks=10;
    compGen()
    console.log(crystalCalc);
    $("#winNum").text(crystalCalc.computer);
}
function compGen(){
    crystalCalc.computer=Math.floor(Math.random()*90)+10;
    

    crystalCalc.red=Math.floor(Math.random()*20)+1;
    

    crystalCalc.blue=Math.floor(Math.random()*20)+1;
    

    crystalCalc.yellow=Math.floor(Math.random()*20)+1;
    

    crystalCalc.green=Math.floor(Math.random()*20)+1;

}
function WinLose(){
    if(totalScore === crystalCalc.computer){
        wins++
        $("#Wins").text("Wins: " + wins);
        alert("YOU WIN!");
        reset()
    }
    else if(totalScore > crystalCalc.computer){
        losses++
        $("#Loss").text("Losses: " + losses);
        alert("YOU LOSE!");
        reset()
    }
    else if(clicks < 1){
        losses++
        $("#Loss").text("Losses: " + losses);
        alert("YOU LOSE!");
        reset()
    }
}


$(document).ready(function(){
reset()



$("#Red").on("click", function(){
    totalScore = totalScore + crystalCalc.red; 
    clicks--;
    console.log(clicks);
    console.log(totalScore);
    $("#Score").text(totalScore);
    WinLose()
})
$("#Blue").on("click", function(){
    totalScore = totalScore + crystalCalc.blue
   clicks--;
    console.log(clicks);
    console.log(totalScore);
    $("#Score").text(totalScore);
    WinLose()
})
$("#Yellow").on("click", function(){
    totalScore = totalScore + crystalCalc.yellow
   clicks--;
    console.log(clicks);
    console.log(totalScore);
    $("#Score").text(totalScore);
    WinLose()
})
$("#Green").on("click", function(){
    totalScore = totalScore + crystalCalc.green
    clicks--;
    console.log(clicks);
    console.log(totalScore);
    $("#Score").text(totalScore);
    WinLose()
})


})
//scoreAdd
//compare

