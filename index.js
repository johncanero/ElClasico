// Score 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomScoreImage = "score" + randomNumber1 + ".png"; //score1.png to score6.png
var randomImageSource = "images2/" + randomScoreImage; //images2/score1.png to score6.png

var image1 = document.querySelectorAll("img")[3];
image1.setAttribute("src", randomImageSource);


// Score 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images2/" + "score" + randomNumber2 + ".png";

var image3 = document.querySelectorAll("img")[5];
image3.setAttribute("src", randomImageSource2)


// Refresh Button
function refreshPage(){
    window.location.reload();
} 



// If and Else Statement

// FC Barcelona Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "FC Barcelona Wins! 🏆";
}

// Real Madrid CF Wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Real Madrid CF Wins! 🏆";
}

// Draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
}