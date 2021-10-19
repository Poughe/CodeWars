function squareDigits(num) {
    let square = n => n ** 2
    return Number(('' + num).split('').map(Number).map(square).join(''));
}

//https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript