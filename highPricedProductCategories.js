function highPricedProductCategories(input){
    let productTotalPrice = input.reduce((acc,{category, price}) => {
        if(!acc[category]){
            acc[category] = {category: category, totalPrice: 0, count: 0}
        }
        acc[category].totalPrice += price
        acc[category].count += 1
        return acc
    }, {})
    
    return Object.values(productTotalPrice)
    .map(v => {
        return {category: v.category, average: v.totalPrice/v.count}
    })
    .filter(v => v.average > 50)
}
const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
]
console.log(highPricedProductCategories(products))