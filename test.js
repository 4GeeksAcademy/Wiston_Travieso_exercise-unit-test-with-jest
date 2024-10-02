// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("Convertir 400 dolares a yenes", () => {
    expect(fromDollarToYen(400)).toBe(58504.67)
})

test("Convertir 500 euros a dolares", () => {
    expect(fromEuroToDollar(500)).toBe(535)
})

test("Convertir 600 yen a libras", () => {
    expect(fromYenToPound(600)).toBe(3.34)
})