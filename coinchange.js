var coins;
var coinArray = {};
var output = {};


/* Method to get coin value without decimal point - it is required because 
* javascript will consider 5.6 as 6 if we do Math.round()
*/
function getRoundFigureCoinValue(x) {
    return (x * 10 - ((x * 10) % 10)) / 10;
}

// Method to calculate possible combination of coins
function calculateCoins(input) {
    let largestPossibleCoin = 1;

    if (input) {
        coins.forEach((x) => {
            if (input >= x) {
                largestPossibleCoin = x;
            }
        });
        let remainingCents = input % largestPossibleCoin;
        output[largestPossibleCoin] = getRoundFigureCoinValue(
            (input / largestPossibleCoin).toFixed(1)
        );
        if (remainingCents && input > 1) {
            calculateCoins(remainingCents);
        }

        return largestPossibleCoin;
    }
}

// Method to be called to get output.
function calculatePossibleCoinCombinations(value) {
    if (isNaN(value) || +value <= 0) {
        console.log('Invalid input');
        return;
    } else {
        console.log('Possible combinations are:')
        value = +value;
    }

    coins = [1, 5, 10, 25];
    while (coins.length) {
        let largestPossibleCoin = calculateCoins(value) || 0;
        let outputString = '';
        coins = coins.filter((x) => x < largestPossibleCoin);
        Object.keys(output).forEach((key) => {
            outputString += `${output[key]} - ${key} cents; `;
        })
        console.log(outputString);
        output = {};
    }
}




 calculatePossibleCoinCombinations('89');