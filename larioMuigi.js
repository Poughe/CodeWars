function pipeFix(n) {
    return [...new Array(n[n.length - 1] - n[0] + 1)].map((_, i) => i + n[0])
}

//https://www.codewars.com/kata/56b29582461215098d00000f/solutions/javascript