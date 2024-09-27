// Function to generate a random number between 1 and 13
function getRandomCardValue() {
    return Math.floor(Math.random() * 13) + 1;
}

// Function to select random card values
function selectRandomCards() {
    document.getElementById("card1").value = getRandomCardValue();
    document.getElementById("card2").value = getRandomCardValue();
    document.getElementById("card3").value = getRandomCardValue();
    document.getElementById("card4").value = getRandomCardValue();
    document.getElementById("card5").value = getRandomCardValue();
}

// Function to sort the cards
function sortCards() {
    let cards = [
        parseInt(document.getElementById("card1").value),
        parseInt(document.getElementById("card2").value),
        parseInt(document.getElementById("card3").value),
        parseInt(document.getElementById("card4").value),
        parseInt(document.getElementById("card5").value)
    ];
    
    cards.sort((a, b) => a - b);
    
    alert("Sorted cards: " + cards.join(", "));
}

// Function to calculate the sum of the card values
function calculateSum() {
    let cards = [
        parseInt(document.getElementById("card1").value),
        parseInt(document.getElementById("card2").value),
        parseInt(document.getElementById("card3").value),
        parseInt(document.getElementById("card4").value),
        parseInt(document.getElementById("card5").value)
    ];
    
    let sum = cards.reduce((a, b) => a + b, 0);
    
    document.getElementById("output").innerText = "Sum of card values: " + sum;
}
