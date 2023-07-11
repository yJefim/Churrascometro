var adult = document.getElementById("adult");
var children = document.getElementById("children");
var hours = document.getElementById("hours");

var calculate = document.getElementById("calculate");
var result = document.getElementById("result");

var meat = document.getElementById("meat");
var beer = document.getElementById("beer");
var drink = document.getElementById("drink");


calculate.onclick = function(){
    result.style.display = "block";


    if (hours.value <= 5){
        var meatPerPerson = (adult.value * 0.400)+ ((children.value * 0.400) * 0.5);

        var beerPerPerson = (adult.value * 1200);

        var drinkPerPerson =(adult.value * 1000)+ ((children.value * 1000) * 0.5);
    }else{
        var meatPerPerson = (adult.value * 0.650) + ((children.value * 0.650) * 0.5);

        var beerPerPerson = (adult.value * 2000);

        var drinkPerPerson =(adult.value * 1500) + ((children.value * 1500) * 0.5);
    }

    meat.innerHTML = (meatPerPerson.toFixed(2)).toString().replace(".", ",");
    beer.innerHTML = Math.ceil(beerPerPerson / 355);
    drink.innerHTML = Math.ceil(drinkPerPerson / 2000);
}