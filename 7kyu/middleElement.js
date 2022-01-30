const gimme = function (inputArray) {
    let A = [...inputArray];
    A.sort((a, b) => a - b);
    return inputArray.indexOf(A[1])
};

//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/solutions/javascript/all/best_practice