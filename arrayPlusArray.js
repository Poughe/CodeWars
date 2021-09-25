function arrayPlusArray(arr1, arr2) {
    const reducer = (a,b) => {return a + b};
      return arr1.reduce(reducer) + arr2.reduce(reducer);
    }

//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript