// - Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// - After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// - Finally, check the amount against your bank account balance to see if you can afford it or not.
// - You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a variable for your “bank account balance.”
// - You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.

function phonePurchase(){
    const bankacc_amount = prompt("enter bank balance");
    const phone_price = 50000;
    const accessory_price = 5000;
    const spending_threshold = 80000;
    const tax_rate = 2000;
    let total_price = 0;

    while(total_price < bankacc_amount){
        total_price = total_price + phone_price;
        console.log("after buying phone, your balance is ", total_price);
        if(total_price < spending_threshold){
            total_price = total_price + accessory_price;
        }
    }
    total_price = total_price + tax_rate;
    console.log("Thank you for shopping. Here's your bill amount Rs. ", total_price)

    if(total_price > bankacc_amount) {
        console.log("Your bank balance is low!");
    }
}

phonePurchase()