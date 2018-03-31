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
}

module.exports = Matrix;