String.prototype.toAlternatingCase = function () {
    let A = []
    let B = this.split('')
    for (let i = 0; i < this.length; i++) {
        if (B[i] === B[i].toLowerCase() && B[i] !== B[i].toUpperCase()) { A.push(B[i].toUpperCase()) }
        else { A.push(B[i].toLowerCase()) }
    }
    return A.join("")
}