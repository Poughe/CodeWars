function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i];
        const next = arr[i + 1];

        if (curr + 1 !== next) {
            return next;
        }
    }

    return null;
}

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions/javascript