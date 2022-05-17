let data = [{
        name: 'Iphone X',
        category: 'phone',
        price: 10000,
    },
    {
        name: 'Iphone 11',
        category: 'phone',
        price: 15000,
    },
    {
        name: 'Iphone 12',
        category: 'phone',
        price: 20000,
    },
    {
        name: 'MacBook Pro',
        category: 'laptop',
        price: 50000,
    },
    {
        name: 'MacBook Air',
        category: 'laptop',
        price: 3000,
    },
    {
        name: 'AirPods',
        category: 'headphones',
        price: 5000,
    },
    {
        name: 'AirPodsPro',
        category: 'headphones',
        price: 10000,
    },
    {
        name: 'Apple TV',
        category: 'tv',
        price: 20000,
    },
    {
        name: 'Xiaomi TV',
        category: 'tv',
        price: 5000,
    },
]

let sortedData = []

function sortByPrice(array) {

    let result = array.sort((a, b) => {
        return (b.price) - (a.price)
    })
    // console.log(result)
    return result
}
sortedData = sortByPrice(data)


function groupGoods(array) {
    let categories
    let goodsMap = new Map()
    array.map((productCategory) => {
        let info = {
            name: productCategory.name,
            category: productCategory.category,
            price: productCategory.price,
        }
        if (goodsMap.has(productCategory.category) !== true) {
            goodsMap.set(productCategory.category, [info])
        } else {
            categories = goodsMap.get(productCategory.category)
            categories.push(info)
        }
    })
    return goodsMap
}

let pMap = groupGoods(sortedData)
// console.log(pMap)

function sumCategory(map) {
    
    for (const [key, value] of map) {
        let sum = value.reduce((count, next) => {
            
            return count + next.price
        }, 0)
        console.log(key, sum)
    }

}
// sumCategory(pMap)

function sumList(goods) {

    let totalPrice = goods.reduce((count, next) => {
        return (count + next.price)
    }, 0)
    // console.log(totalPrice)
    return totalPrice
}
// sumList(sortedData)

function print(map) {
    for (const [category, goods] of map) {
        console.log('\n' + category.toUpperCase() + ' ' +sumList(goods) + '\n')
        goods.forEach((element) => {
            console.log('  ' + element.name + '...........' + element.price)
            

        })
        // console.log(sumCategory(pMap))
    }
    console.log('\n-----------------------------\n' + '  Total price: ' + sumList(sortedData))
}
print(pMap)



//------------------------------------TEST----------------------------------