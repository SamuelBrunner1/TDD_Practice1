function stringSum(num1, num2) {
    // Standardwerte, falls Eingaben keine natürlichen Zahlen sind
    const isValidNumber = (str) => /^[1-9]\d*$/.test(str); 
    const n1 = isValidNumber(num1) ? parseInt(num1, 10) : 0;
    const n2 = isValidNumber(num2) ? parseInt(num2, 10) : 0;
    
    return (n1 + n2).toString();
}

module.exports = stringSum;
