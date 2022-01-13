function findEvenIndex(arr) {
    let sum = 0,
        leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum)
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if (leftSum === sum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions/javascript