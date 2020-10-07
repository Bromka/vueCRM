export function getCurrencyArray(currency:any){
    const arr = []
    const getSimpleCurrency = function (name:string) {
        if (currency.Valute) return {name: currency.Valute[name].Name, value: currency.Valute[name].Value }
    }

    arr.push(getSimpleCurrency('EUR'))
    arr.push(getSimpleCurrency('USD'))
    arr.push({name: 'Рубль', value: 1})

    return {Date: currency.Date, values: arr}
}



