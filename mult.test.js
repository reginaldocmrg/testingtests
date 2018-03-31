const mult = require('./mult');

test('tests parameters that are not a number', () => {
    expect(() => {
        mult('a', 2);
    }).toThrow("NAN");

    expect(() => {
        mult(1, 'b');
    }).toThrow("NAN");
});

test('adds 1 + 2 to equal 3', () => {
    expect(mult(5, 3)).toBe(15);
});