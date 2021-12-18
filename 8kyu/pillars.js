function pillars(num, dist, width) {
    return num < 2 ? 0 : ((dist * 100) * (num - 1)) + ((num - 2) * width)
}

//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/solutions/javascript