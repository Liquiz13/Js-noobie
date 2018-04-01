function randNumb() {
    return Math.random() * (100 - 1) + 1;
};

var gameNumber = randNumb();

function game(gameNumber) {
    var number = prompt ('Choose a number','');
    if (typeof Number === number) {
        continue;
    }
    if (gameNumber === number) {
        alert ('You win!!! Do you want play one more time?');
        return true;
    } else if (number > gameNumber) {
        alert ('Your number is bigger');
        game(gameNumber);
    } else if (number < gameNumber) {
        alert ('Your number is smaller');
        game(gameNumber);
    } else {
        alert ('Try again');
        game(gameNumber);
    }
};