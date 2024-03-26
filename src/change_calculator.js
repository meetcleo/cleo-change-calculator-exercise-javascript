const ChangeCalculator = {
    CoinsNeeded: function (amount) {
        if (amount == 0) {
            return []
        }

        const requiredCoins = []
        availableCoins().forEach(availableCoin => {
            if (amount >= availableCoin) {
                requiredCoins.push(availableCoin)
                amount -= availableCoin
            }
        })

        return requiredCoins
    }
}

const availableCoins = () => DENOMINATIONS;

const DENOMINATIONS = [
    50,
    5,
    200,
    20,
    2,
    100,
    10,
    1,
]

module.exports = ChangeCalculator;