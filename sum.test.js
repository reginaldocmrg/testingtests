const sum = require('./sum');

test('tests parameters that are not a number', () => {
    expect(() => {
        sum('a', 2);
    }).toThrow("NAN");

    expect(() => {
        sum(1, 'b');
    }).toThrow("NAN");
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});