const { calcularJurosComposto, receberValores } = require('../src/calculo');


describe('Função calcularJurosComposto', () => {
    it('deve calcular corretamente o valor final com juros compostos', () => {
        const resultado1 = calcularJurosComposto(100, 12, 5);
        expect(resultado1).toBe('176.23');  

        const resultado2 = calcularJurosComposto(355, 13, 3);
        expect(resultado2).toBe('512.23');  
    });
});

describe('Função receberValores', () => {
    it('deve retornar o valor final corretamente', () => {
        const resultado1 = receberValores(1000, 5, 12);
        expect(resultado1).toBe('1795.86'); 

        const resultado2 = receberValores(5000, 3, 6);
        expect(resultado2).toBe('5970.26');  
    });

    it('deve retornar undefined para valores inválidos', () => {
        const resultadoInvalido = receberValores(-1000, 5, 12);
        expect(resultadoInvalido).toBeUndefined();
    });
});
