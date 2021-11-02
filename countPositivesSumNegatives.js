function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    } else {
        const reducer = (a, b) => { return a + b };
        const lessThan = input.filter(a => a < 0);
        const greaterThan = input.filter(a => a > 0);
        return [greaterThan.length, lessThan.reduce(reducer, 0)]
    }
}
    //Params
    //input or an array
    //input can be positive or negative
    //no strings (all nums)
    //array can empty or null
  //Return
    // Returning an array with two numbers
    // One number will be the count total of every postiive number
    // Other number will be the sum total of the negative numbers

  //Example
    //[1,2,3,4,5, 6, 7, 8, 9, 10-11,-12,-13,-14,-15] => [10, -65]
    // Example 2
    // Example 3

  //Pseudo
    // if statement covering those conditions empty or null
    // return empty array
    // reducer = (a,b) => return a+b
    // filter both a < 0
    // filter a > 0
    //return a < 0 , a > 0  



//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript/all/best_practice