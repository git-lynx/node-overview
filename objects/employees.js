const path = require('path')
const fs = require('fs')
let result = []

// console.log(process.argv)
let employeesPath = process.argv[2]
let horizon = process.argv[3] || 1

//for start, write in terminal: ______________________________________
//                            |                                      |
//                            |cd ./YOUR_FOLDER_WITH_ALL_FILES       |  
//                            |node employees.js ./employees.csv 2   |
//                            |nodemon employees.js ./employees.csv 2|
//                            |______________________________________|
//
// let topicsPath = path.resolve(__dirname, './topics.txt');

// console.time('file read');

fs.readFile(employeesPath, {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
})
