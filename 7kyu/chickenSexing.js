function correctness(bob, ex) {
    let count = 0
    bob.forEach((x, i) => bob[i] == ex[i] ? count++ : bob[i] == '?' || ex[i] == '?' ? count += 0.5 : count += 0)
    return count
}

//https://www.codewars.com/kata/57ed40e3bd793e9c92000fcb/solutions/javascript