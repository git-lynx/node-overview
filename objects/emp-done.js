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
// const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

function groupByDate(arr) {
    //свертка массива во временный объект, с датами в качестве ключей
    const temp = arr.reduce((acc, elem) => {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        const currentDate = new Date()

        const userBirthday = elem.date.split('-')[2].toString()
        const userFullName = elem.name
        const currentYear = currentDate.getFullYear()
        const userYear = elem.date.split('-')[0]
        const fullUserAge = (currentYear - userYear).toString()

        const getUserMonth = new Date(elem.date)
        const userMonthToString = months[getUserMonth.getMonth()]
        const stringMonths = `${userMonthToString}`
        // делим строку по дефису и извлекаем 1й элемент(он же месяц), по нему мы и будем группировать
        const date = elem.date.split('-')[1]
        //
        //если ключа-даты еще нет в объекте, записываем туда пустой массив
        if (!acc[date]) {
            acc[date] = []
        }
        // кладём текущий элемент в соответствующий массив
        acc[date].push(elem);
        return acc
    }, {});
    // извлекаем все ключи получившегося объекта в массив
    // и преобразуем массив ключей в массив значений
    return Object.getOwnPropertyNames(temp).map(k => temp[k]);
}

console.log(groupByDate(data))