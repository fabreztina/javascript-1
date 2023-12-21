const products = [
    {name: 'Car', id: 1},
    {name: 'Bike', id: 2},
    {name: 'Mobile phone', id: 3},
    {name: 'Chairs', id: 4},
    {name: 'Cycle', id: 5}
]

const productPrice = [
    {id: 1, price: '10,00,000'},
    {id: 2, price: '2,00,000'},
    {id: 3, price: '40,000'},
    {id: 4, price: '1000'},
    {id: 5, price: '15,000'},
]

const output = products.map(obj1 => {
    let newObj = productPrice.find(obj2 => obj1.id === obj2.id)
    return {
        id: newObj.id,
        name: obj1.name,
        price: newObj.price
    } 
})

console.log(output);