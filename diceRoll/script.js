let user1Roll = 0;
let user2Roll = 0;

function rollDice(user) {
    const roll = Math.floor(Math.random() * 6) + 1; 
    
    if (user === 'user1') {
        user1Roll = roll;
        document.getElementById('user1Roll').textContent = roll;
    } else if (user === 'user2') {
        user2Roll = roll;
        document.getElementById('user2Roll').textContent = roll;
    }
}


function determineWinner() {
    if (user1Roll > user2Roll) {
        alert("User 1 is the winner!");
    } else if (user1Roll < user2Roll) {
        alert("User 2 is the winner!");
    } else if (user1Roll === 0 || user2Roll === 0) {
        alert("Both users must roll the dice!");
    } else {
        alert("It's a tie!");
    }
}
