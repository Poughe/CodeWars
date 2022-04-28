function pigIt(str) {
    let arr = str.split(' ')
    return arr.map((word) => {
        return word.match(/[A-z]/i)
            ? `${word.substr(1)}${word.substr(0, 1)}ay` : word
    })
        .join(' ')
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript