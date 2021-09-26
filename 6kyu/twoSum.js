function twoSum(numbers, target) {
    for (let n = numbers.length - 1; n >= 0; n--) {
        for (let m = n - 1; m >= 0; m--) {
            if (numbers[n] + numbers[m] == target) {
                return [n, m];
            }
        }
    }
}

//https://www.codewars.com/kata/52c31f8e6605bcc646000082/solutions/javascript/all/best_practice