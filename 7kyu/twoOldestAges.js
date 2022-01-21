function twoOldestAges(ages) {
    let oldest = ages.sort((a, b) => a - b)
    return [oldest[oldest.length - 2], oldest[oldest.length - 1]]

}

//https://www.codewars.com/kata/511f11d355fe575d2c000001/solutions/javascript