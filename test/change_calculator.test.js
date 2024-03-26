const ChangeCalculator = require('../src/change_calculator')

describe('Change Calculator', () => {
    test('returns empty list when amount requested is 0', () => {
        expect(ChangeCalculator.CoinsNeeded(0)).toStrictEqual([])
    })

    it.each([1, 2, 5, 10, 20, 50, 100, 200])
    ("returns exactly one coin, of the correct denominiation, if that is the amount requested - %s",
     denomination => {
        expect(ChangeCalculator.CoinsNeeded(denomination)).toStrictEqual([denomination])
    })

    it.each([
        [163, [100, 50, 10, 2, 1]],
        [37, [20, 10, 5, 2]],
        [15, [10, 5]],
        [202, [200, 2]],
    ])
    ("combines multiple coins to build the requested amount - %s",
     (amount, expectedCoins) => {
        console.log(expectedCoins)
        expect(ChangeCalculator.CoinsNeeded(amount)).toStrictEqual(expectedCoins)
    })
})
