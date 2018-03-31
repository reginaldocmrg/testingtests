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

test('adds two 2x2 matrixes', () => {
    let m1 = new Matrix(2, 2);
    let m2 = new Matrix(2, 2);

    m1.data = [
        [1, 2],
        [3, 4]
    ];

    m2.data = [
        [3, 4],
        [5, 6]
    ];

    expect(() => {
        m1.add(null);
    }).toThrow("WRONG_INFO");

    expect(m1.add(m2)).toEqual({
        row: 2,
        column: 2,
        data: [
            [4, 6],
            [8, 10]
        ]
    });
});

test('adds two 3x2 matrixes', () => {
    let m1 = new Matrix(3, 2);
    let m2 = new Matrix(3, 2);

    m1.data = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];

    m2.data = [
        [3, 4],
        [5, 6],
        [7, 8]
    ];

    expect(() => {
        m1.add(null);
    }).toThrow("WRONG_INFO");

    expect(m1.add(m2)).toEqual({
        row: 3,
        column: 2,
        data: [
            [4, 6],
            [8, 10],
            [12, 14]
        ]
    });
});