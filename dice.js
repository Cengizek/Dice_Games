var randomNumber1=Math.floor(1+Math.random()*6);


var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




var randomNumber2=Math.floor(1+Math.random()*6);

var randomImageSource2="images/dice" +randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won !";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 won !";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
    
}


