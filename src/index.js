
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    matrix.forEach((array, index) => index % 2 !== 0 ? array = array.reverse() : '');
    return matrix.length !== 0 ? matrix.reduce((a, b) => a.concat(b)) : matrix;
}
