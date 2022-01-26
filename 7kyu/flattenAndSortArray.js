function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => { return a - b })
}

//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/solutions/javascript