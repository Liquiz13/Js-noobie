function numbBigger(params) {
    var num1 = prompt ('choose first number','');
    var num2 = prompt ('choose second number','');
    var num3 = prompt ('choose third number','');
    if (num1 > num2, num1 > num3) {
        alert ('First number the biggest one');
    } else if (num2 > num1, num2 > num3) {
        alert ('Second number the biggest one');
    } else if ( num3 > num1, num3 > num2) {
        alert ('Third number the biggest one');
    } else {
        alert ('Please try again');
    }
}