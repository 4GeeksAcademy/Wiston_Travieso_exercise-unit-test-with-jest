
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Función para convertir Dolares a Yenes

const fromDollarToYen = (dollar) => {
    const euros = dollar / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return parseFloat(yenes.toFixed(2))
}

// Función para convertir Euro a Dólares

const fromEuroToDollar = (euro) => {
    const dollar = euro * oneEuroIs.USD;
    return parseFloat(dollar.toFixed(2))
}

// Función para convertir Libras a Yenes

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    const pound = euros * oneEuroIs.GBP;
    return parseFloat(pound.toFixed(2))
}

console.log(fromDollarToYen(400));
console.log(fromEuroToDollar(500));
console.log(fromYenToPound(600));



// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};