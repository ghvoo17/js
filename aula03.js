"use strict"
/*var: reserva um espaço na memória, onde vai receber e criar um bloco com o que for declarado dentro da variável. Se implementada dento de um escopo, pode ser acessada por fora. Mas se for declarad dentro de uma function, oq estiver fora e tentar acessar, dara erro.

Let: Só permite ser acessada detro do próprio escopo ou acima, nunca abaixo. Mesmo iniciando com um valor, você pode mudar o valor depois.

Const: O valor sempre vai permanecer o mesmo ao longo do programa e n ira se alterar*/

//-------------------------------------------------------------------

//Teste do let e diferença de let para var e como usar em um escopo
function teste(){
    let nome="Ghustavo"
    if(true){
        console.log("Dentro do If teste: " + nome)
    }
    console.log("fORA DO iF E DENTRO DO TESTE: " + nome)
}
teste()

console.log("fora de teste e if: " + nome) //da erro, pois está fora do escopo

//------------------------------------------------------------------

var nome2="Ghustavo" //criou um bloco na memória com esse valor

let nome1="Ghu" //pode ter seu valor alterado
nome1="GHVOO" //alterou o valor 

const curso="JAVA SCRIPT" //não aletra seu valor