function solve(s) {
    return Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
};

//https://www.codewars.com/kata/59c633e7dcc4053512000073/solutions/javascript