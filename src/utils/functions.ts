export function getCurrencyArray(currency:any){
    const arr = []
    const getSimpleCurrency = function (name:string) {
        if (currency.Valute) return {name: currency.Valute[name].Name, value: currency.Valute[name].Value, day: currency.Date }
    }

    arr.push(getSimpleCurrency('EUR'))
    arr.push(getSimpleCurrency('USD'))
    return arr
}



