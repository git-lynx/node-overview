const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь', ];


fs.createReadStream(process.argv[2])
    .pipe(csv())
    .on('data', (data) => (results.push(data)))
    .on('end', () => {
        let eMap = formatByMonth(results);
        console.log(showPlanning(eMap, +process.argv[3])); // set value for planing
    });
//for start, type it in terminal: node your_file.js data.csv 2

function formatByMonth(emp) { 
    let employees;
    let employMap;
    employMap = new Map();
    let sortByMonth = emp.map((user) => {
        let birthDate = new Date(user.birthDay);
        let birthMonth = birthDate.getMonth() + 1;
        if (employMap.has(birthMonth) !== true) {
            employMap.set(birthMonth, [{
                fullName: user.fullName,
                birthDay: birthDate
            }])
        } else {
            employees = employMap.get(birthMonth);
            employees.push({
                fullName: user.fullName,
                birthDay: birthDate
            });
            employMap.set(birthMonth, employees)
        }
    });
    return employMap;
}

function getAge(date) { // get age of employee from birthday date
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }
    return age;
}

function Plural(num, nom, gen, plu) {
    if (num % 10 === 0) {
        return `${num} ${plu}`;
    } else if (num % 10 === 1) {
        return `${num} ${nom}`;
    } else if (num % 10 > 1 && num % 10 < 5) {
        return `${num}  ${gen}`;
    } else if (num % 10 >= 5 && num % 10 <= 10) {
        return `${num} ${plu}`;
    }
}

function displayBirthdayOfMonth(employees) { // creating an output string
    let string = ""
    for (let j = 0; j < employees.length; j++) {
        string = string + (`(${employees[j].birthDay.getDate()}) -  ${employees[j].fullName} (${Plural(getAge(employees[j].birthDay), "год", "года", "лет")})` + "\n");
    }
    return string
}

function showPlanning(eMap, horizontalPlanning) { // creating output Map in console results
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1;
    for (let i = mm; i <= mm + horizontalPlanning; i++) {
        for (const [key, employees] of eMap) {
            if (key === i) {
                console.log(`${months[i - 1]} ${currentYear} `)
                console.log(displayBirthdayOfMonth(employees));
            }
        }
    }
}