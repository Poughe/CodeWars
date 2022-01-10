function solution(string) {
    return string.split("").map(el => el === el.toUpperCase() ? ' ' + el : el).join("")
}

//https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript