const prompt = require('prompt-sync')();

const regioes = []

const lerIndice = mensagem => parseInt(prompt(mensagem))

const nomeInvalido = pais => pais == ""

const indiceInvalido = indice => indice < 0 || indice >= regioes.length || isNaN(indice)


const listagem = () => regioes.forEach((jogo, i) => {
    let sequencia
    if(regiao.sequencia != -1) {
        sequencia = regioes[regiao.sequencia].pais
    } else {
        sequencia = "Não possuí sequência"
    }
    console.log(`${i + 1} - ${regiao.pais} - ${regiao.estado} - ${regiao.cidade}`)

})

const modelo = () => {
    let regiao = {}

    while(true) {
        regiao.pais = prompt("Qual é o país?");
        if(nomeInvalido(regiao.pais)) {
            console.log("")
        }
    }
}