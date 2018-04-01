function numbBigger(num1, num2, num3) {
    if (typeof number === num1 && num2 && num3) {
        continue;
    }
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if ( num3 > num1 && num3 > num2) {
        console.log(num3);
    } else {
        alert ('Please try again');
        numbBigger(num1, num2, num3);
    }
}

numbBigger(1,3,5);
numbBigger(1,7,5);
numbBigger(4,3,5);
numbBigger(1,3,-5);
numbBigger(1,1,1);