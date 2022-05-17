function renderField(field) {
    let result = '';
    for (let i = 0; i < field.length; i++) {
        if (i === 0) {
            result += ' ' + field[i];
        } else if (i % 3 === 0) {
            result += ' \n ---+---+--- \n ' + field[i];
        } else {
            result += ' | ' + field[i];
        }
    }
    console.log(result);
}
renderField([
    -1, 0, 1,
    -1, 0, 1,
    -1, 0, 1,
]);

// console.log([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '])