function calculate(num1, operation, num2) {
    if (num2 === 0 && operation === '/') { return null } else {
        switch (operation) {
            case '+': return num1 + num2;
                break;
            case '-': return num1 - num2
                break;
            case '*': return num1 * num2
                break;
            case '/': return num1 / num2;
            default: return null;
        }
    }
}

//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/solutions/javascript
//re-submit