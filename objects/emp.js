const data = [{
    name: 'Вася Пупкин',
    date: '2001-01-01'
}, {
    name: 'Ваня Иванов',
    date: '2002-02-02'
}, {
    name: 'Петя Петров',
    date: '2003-03-03'
}, {
    name: 'Коля Новогодний',
    date: '2003-01-03'
}, {
    name: 'Стас Рождественский',
    date: '2002-02-02'
}, {
    name: 'Олег Летний',
    date: '2001-03-03'
}, ]

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябры',
    'Ноябрь',
    'Декабрь',
]

function getUserBirthday(arr) {
    const temp = arr.reduce((acc, elem) => {
        
        const currentDate = new Date()

        const userBirthday = elem.date.split('-')[2].toString()
        const userFullName = elem.name
        const currentYear = currentDate.getFullYear()
        const userYear = elem.date.split('-')[0]
        const fullUserAge = (currentYear - userYear).toString()
        const getUserMonth = new Date(elem.date)
        const userMonthToString = months[getUserMonth.getMonth()]
        console.log(userMonthToString)
        console.log(`(${userBirthday}) - ${userFullName}  (${fullUserAge} years)`)

    }, {})
}

console.log(getUserBirthday(data))
        // const monthsToString = elem.getMonth()
        // console.log(monthsToString)
        // const dd = String(currentDate.getDate()).padStart(2, '0')
        // console.log(dd)
        // const mm = String(currentDate.getMonth() + 1).padStart(2, '0')
        // console.log(mm)
        // const yyyy = String(currentDate.getFullYear())
        // console.log(yyyy)
        