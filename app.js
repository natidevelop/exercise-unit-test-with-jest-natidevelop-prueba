// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// 1euro=156,5yen 
// ?euros=1yen
// 1/156,5=euro
// euro*GBP 0,87

// 1 euro =1,07 dollar 
// 0,93 euro=1 dollar
// // 1 dollar ?euro
// 0,93* 156,5=145,545

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro *oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let euro=valueInDollar/oneEuroIs.USD 
    let valueInYen = euro *oneEuroIs.JPY
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let euro=valueInYen/oneEuroIs.JPY
    let valueInPound = euro *oneEuroIs.GBP
    // Retornamos el valor en dólares
    return valueInPound;
}
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum ,fromEuroToDollar,fromDollarToYen,fromYenToPound };