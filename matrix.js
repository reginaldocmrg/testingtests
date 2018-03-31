class Matrix {

    constructor(row, column) {
        this.row = row;
        this.column = column;
        this.data = [[]];
    }

    sumScalar(scalar) {
        let dataSummed = [[]];
        this.data.forEach((row, i) => {
            dataSummed[i] = [];
            row.forEach((el, j) => {
                dataSummed[i][j] = el + scalar;
            });
        });

        let matrix = new Matrix(this.row, this.column);
        matrix.data = dataSummed;

        return matrix;
    }

    add(m2) {
        let m3 = new Matrix(this.row, this.column);

        if(!m2 || !m2.data) {
            throw 'WRONG_INFO';
        }

        m2.data.forEach((row, i) => {
            m3.data[i] = [];
            row.forEach((el, j) => {
                m3.data[i][j] = this.data[i][j] + el;
            });
        })

        return m3;
    }
}

module.exports = Matrix;