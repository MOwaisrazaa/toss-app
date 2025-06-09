



var image = document.querySelector("#image");
var result = document.querySelector("#result");
image.src= "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"

function toss(coin) {
    result.innerHTML = "Please Chose the toss Side ";

    // Start spin animation
    image.classList.add("spin");

    setTimeout(() => {
        // Remove spin animation
        image.classList.remove("spin");

        var randomNumber = Math.ceil(Math.random() * 2);
        console.log(randomNumber);

        if (randomNumber === 1) {
            image.src = "https://en.numista.com/catalogue/photos/pakistan/424-original.jpg"; // Masjid side
        } else {
            image.src = "https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg"; // Chand side
        }

        // Show result
        if ((randomNumber === 1 && coin === "masjid") || (randomNumber === 2 && coin === "chand")) {
            result.innerHTML = "You won the Toss!";
        } else {
            result.innerHTML = "You lost the Toss.";
        }

    }, 2000); 
}






