module.exports = function reverse (n) {
    const inputNumber = n.toString();
    if (inputNumber[0] === '-') {
        const result = inputNumber.slice(1).split('').reverse().join('');
        return +result;
    } else {
        return +inputNumber.split('').reverse().join('');
    }
}
