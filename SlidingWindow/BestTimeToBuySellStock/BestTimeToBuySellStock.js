/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);

        let currentProfit = price - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
    }

    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

console.log(maxProfit([7, 6, 4, 3, 1]));
