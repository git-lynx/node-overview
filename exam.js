
function groupGoods(array) {

    let categories
    let goodsMap = new Map()
    array.forEach((product) => {
        let info = {
            name: product.name,
            category: product.category,
            price: product.price,
        }
        if (goodsMap.has(product.category) !== true) {
            goodsMap.set(product.category, [info])
        } else {
            categories = goodsMap.get(product.category)
            categories.push(info)
        }
        let outputString = `${goodsMap.get(product.price)}`
    })
    
// function sortByPrice () {}
console.log(goodsMap)

return goodsMap

}

// function sumPrice() {

// }

groupGoods([{
        name: 'IphoneX',
        category: 'phone',
        price: 1000,
    },
    {
        name: 'Iphone 11',
        category: 'phone',
        price: 1000,
    },
    {
        name: 'MacBook Pro',
        category: 'laptop',
        price: 2000,
    },
    {
        name: 'MacBook Air',
        category: 'laptop',
        price: 2000,
    },
    {
        name: 'AirPods',
        category: 'headphones',
        price: 3000,
    },
    {
        name: 'Apple TV',
        category: 'tv',
        price: 4000,
    }
])