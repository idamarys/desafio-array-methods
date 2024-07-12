module.exports = {
    pares,
    maiorNumero,
    maiorIdade,
    alunosAprovados,
    multiploDe5,
    multiploDe5EapenasPares
}

function pares(param) {
    var toReturn = param.filter((elemento) => elemento % 2 == 0)
    return toReturn;
}

function maiorNumero(param) {
/*
    var toReturn = param[0]
    for (let index = 1; index < param.length; index++) {
        if (param[index] > toReturn) toReturn = param[index]
    }
*/
    var toReturn = param.reduce((acumulador, elemento) => Math.max(acumulador, elemento))
    return toReturn;
}

function maiorIdade(param) {
    var toReturn = param.find((pessoa) => pessoa.idade >= 40)
    return toReturn;
}

function alunosAprovados(param) {
    var toReturn = param.filter(aluno => aluno.nota >= 7)
    return toReturn;
}

function multiploDe5(param) {
    var toReturn = param.filter(elemento => elemento % 5 == 0)
    return toReturn;
}

function multiploDe5EapenasPares(param) {
    var toReturn = param.filter(elemento => elemento % 5 == 0 && elemento % 2 == 0)
    return toReturn;
}