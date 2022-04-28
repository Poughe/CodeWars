const solve = s => s.split('').filter(x => x.toUpperCase() == x).length <= s.length / 2 ? s.toLowerCase() : s.toUpperCase()

//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/solutions/javascript