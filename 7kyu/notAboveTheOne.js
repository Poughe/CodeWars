function binaryCleaner(arr) {
    let A = []
    let B = []
    arr.map((x, i) => x < 2 ? A.push(x) : B.push(i))
    return [A, B]
}

//https://www.codewars.com/kata/5b5097324a317afc740000fe/solutions/javascript