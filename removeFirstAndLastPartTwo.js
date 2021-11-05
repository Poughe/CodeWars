function array(arr) {
    const words = arr.split(',')
    words.shift()
    words.pop()
    return words.length ? words.join(' ') : null
}

//https://www.codewars.com/kata/570597e258b58f6edc00230d/solutions/javascript/me/best_practice