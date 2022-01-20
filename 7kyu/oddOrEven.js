function oddOrEven(array) {
    return array.length === 0 ? 'even' : array.reduce((e, i) => e + i) % 2 == 0 ? 'even' : 'odd'
}

//https://www.codewars.com/kata/5949481f86420f59480000e7/solutions/javascript