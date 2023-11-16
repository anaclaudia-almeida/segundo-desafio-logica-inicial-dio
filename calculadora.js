/* Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
Bons estudos 😉 */

let saldoRanqueados = calcular (80, 50)
let nivel = ""

function calcular (vitorias, derrotas) {
  let valorFinal = vitorias - derrotas
  return valorFinal;

}

  if (saldoRanqueados < 10) {
    nivel = "Ferro";
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >= 11 && saldoRanqueados <=20){
    nivel = "Bronze";
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >=21 && saldoRanqueados <=50) {
    nivel = "Prata";
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >=51 && saldoRanqueados <=80) {
    nivel = "Ouro"
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >=81 && saldoRanqueados <=90) {
    nivel = "Diamante"
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >=91 && saldoRanqueados <=100){
    nivel = "Lendário"
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
  } else if (saldoRanqueados >=101){
    nivel = "Imortal";
    console.log (`O herói tem saldo de "${saldoRanqueados}" e está no nível "${nivel}`)
}
