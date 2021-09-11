function positiveSum(arr) {
    if(arr.length ===0 || arr[0] === undefined) {
      return 0;
    } else if (arr.filter( (num) => Math.sign(num) > 0). length ===0 ) {
      return 0
    } else {
      return arr.filter((num) => Math.sign(num) >= 0).reduce((x,y) => x + y);
    }
   }
//https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript