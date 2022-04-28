var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))

}

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript