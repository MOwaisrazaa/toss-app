
// var body = document.querySelector("body");

// function clickMe(){

// body.style.backgroundColor = "red"
// body.style.color = "white"

// }
// var input = document.querySelector("#input");
// var cities = ["karachi", "larkana", "sakkhar", "nawabShah", "heydrabad", "sakrand"];

// function checkcity(){
//     console.log(input.value.toLowerCase())
//     if(cities.includes(input.value.toLowerCase())){
//         console.log("you are the live in safest city");
//     } else{
//         console.log("zindagi barbad")
//     }

// }

// var userName = "Muhammad owais raza "

// console.log(userName.concat("qadri attari "))

// var sub = document.querySelector("#sub");









//type of string

// // string
// var laptop = "DEll"


// // number
// var num = 10;


// alert("my laptop brand is " + laptop)



// legal varaibles Names

// var name = "Ali";
// var _username = "user123";
// var $price = 100;
// var myAge = 25;
// var user1 = "Ahmed";
// var camelCaseExample = true;




// // illegal varaibles Names

// var 1name = "Ali";       // ❌ Number se shuru
// var my name = "Ahmed";   // ❌ Space allowed nahi
// var var = "hello";       // ❌ Keyword use nahi kar sakte
// var @price = 200;        // ❌ Special character not allowed
// var user-name = "Sara";  // ❌ Hyphen not allowedvar



var image = document.querySelector("#image");
image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
var result = document.querySelector("#result")

function toss(coin){

    var randomNumber = Math.ceil(Math.random()*2)
    console.log(randomNumber)
    if(randomNumber === 1 && coin === "masjid" || coin === "chand" && randomNumber === 2){

        result.innerHTML = "you are win the toss"
    } else {
        result.innerHTML = "you are loss the toss"
        
    }
    
    if(randomNumber === 1){
        image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"
    } else {
        image.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"
    }
}





