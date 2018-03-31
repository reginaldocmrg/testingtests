const Matrix = require('./matrix');

test('adds 1 scalar to a 2x2 matrix', () => {
    let m = new Matrix(2, 2);
    m.data = [
        [1, 2],
        [3, 4]
    ]

    expect(m.sumScalar(1)).toEqual({
        row: 2,
        column: 2,
        data: [
            [2, 3],
            [4, 5]
        ]
    });
});

test('adds 1 scalar to a 3x3 matrix', () => {
    let m = new Matrix(3, 3);
    m.data = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    expect(m.sumScalar(1)).toEqual({
        row: 3,
        column: 3,
        data: [
            [2, 3, 4],
            [5, 6, 7],
            [8, 9, 10]
        ]
    });
});