/*
    Conceitos
    [ ] Váriaveis
      - É um pedacinho da memória do computador,
        q podemos guardar alguma coisa. Mas, temos 
        q identificar esse espacinho com um nome.
        
        let + um nome = variável
    
    [ ] Funções
      - Pedacinho do código que... Só é executado , QUANDO EU
      EU ordenar

      function + nome da função + () + {}

    [ ] "Tempo"
      - setInterval - Ele Chama uma função de tempos em tempos
      5 em 5 segundos

    [ ] If & Else
        SE -> Faça isso
        SE NÃO -> Faça isso

        = -> Atribuir ou colocar um valor dentro
        == -> Comparando A com B

*/

// document = HTML

let imagem = document.querySelector(".troca-imagem")

function trocaImage(){
    console.log("Trocar imagem")
    //
    // imagem.style.opacity --> visível
    if(imagem.style.opacity == 0){
      imagem.style.opacity = 1
    } else {
      imagem.style.opacity = 0
    }
}

// milisegundos -> 1 segundo igual a mil segundos
setInterval(trocaImage, 3000)

console.log(imagem)

//terminei o video em 1:29 aula 4
