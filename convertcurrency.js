const usd = 95

function convertUSDtoEuro(howEverManyDollarsIHave) {
  const euroToUsdConversionRate = 0.71
  return howEverManyDollarsIHave * euroToUsdConversionRate
}

const myEuros = convertUSDtoEuro(usd)

console.log(`${usd} USD is equivalent to ${myEuros} Euro`)