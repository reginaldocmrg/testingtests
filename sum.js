function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw 'NAN';
    }

    return a + b;
}

module.exports = sum;