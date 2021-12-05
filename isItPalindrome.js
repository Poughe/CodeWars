function isPalindrome(x) {
    let originalStr = x.toLowerCase();
    let pali = x.split('').reverse().join('').toLowerCase();
    if (pali === originalStr) {
        return true;
    } else {
        return false;
    }
}

//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript