function solution(nums) {
    const order = (a, b) => {
        return a - b
    }
    return nums === null ? [] : nums.sort(order)
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/solutions/javascript