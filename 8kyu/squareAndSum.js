function squareSum(array){
    let total = 0
    square = array.map(item => item * item);
    for (let i=0; i<square.length; i++){
      total += square[i];
    }
    return total
  }

//https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript