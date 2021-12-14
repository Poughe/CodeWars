function digitize(n) {
    const numberDigits = n.toString().split('').reverse();
    return (numberDigits).map(element => Number(element))
    }

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript