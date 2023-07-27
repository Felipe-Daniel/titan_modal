class Calculadora {

    numeros = [];

    constructor(numeros) {
        this.numeros = numeros;
    }

    fatorial(numero) {
        if (numero == 0 || numero == 1) {
            return 1;
        } else {
            return numero * this.fatorial(numero - 1);
        }
    }

    impares() {
        const numerosImpares = this.numeros.filter((num) => num % 2 !== 0);
        return numerosImpares
    }

    media() {
        let soma = 0
        let mediaAritimetica = 0
        this.numeros.forEach(element => {
            soma += element
            mediaAritimetica = soma / this.numeros.length
        });
        return mediaAritimetica
    }

    variancia() {
        let media = this.media()
        let variancia = 0
        this.numeros.forEach(element => {
            variancia += ((element - media) ** 2)
        });
        variancia /= this.numeros.length
        return variancia
    }

    desvioPadrao() {
        let desvioPadrao = Math.sqrt(this.variancia());
        return desvioPadrao
    }


    printAll() {
        console.log(`
        Fatorial do primeiro elemento: ${this.fatorial(this.numeros[0])}
        Média aritimética: ${this.media()}
        Variância: ${this.variancia()}
        Desvio padrão: ${this.desvioPadrao()}
        Números ímpares: ${this.impares()}
        `)
    }
}

let calc1 = new Calculadora([7, 8, 10, 24, 21, 38, 157, 3, 16]);
calc1.printAll();