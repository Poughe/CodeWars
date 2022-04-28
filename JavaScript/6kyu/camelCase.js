String.prototype.camelCase = function () {
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

//https://www.codewars.com/kata/587731fda577b3d1b0001196/solutions/javascript