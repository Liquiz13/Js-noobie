function randNumb(params) {
    return Math.random() * (100 - 1) + 1;
    }   
function promps(params) {
    var number1 = prompt ('Choose a number','');
    if (randNumb = number1) {
        alert ('You win!!! Do you want play one more time?');
    } else if (number1 > randNumb) {
        alert ('Your number is bigger');
    } else {
        alert ('Your number is smaller');
    }
}