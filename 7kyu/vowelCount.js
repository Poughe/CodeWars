function getVowels(str) {
    let v = str.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

//https://www.javatpoint.com/javascript-string-match-method
//https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript