function createMatrix(rows, cols) {
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
}

// Usage
let matrix = createMatrix(3, 3);
console.log(matrix);