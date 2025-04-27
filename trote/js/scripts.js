function calcular(){//define a funçao calcular
    // vamos criar 2 variáveis 
    // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue//let declara variaveis
    // recupera o valor do mascote digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)//getElementById acessa elementos pelo html
    // recupera o valor da homenagem digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)//.value obtem o valor de um input html
    // recupera a qtde de litros de leite
    leite = Number(document.getElementById("leite").value)//number() converte para numeros
    // recupera a qtde avulsa de kits de alimentação
    kit = Number(document.getElementById("kit").value)
    // recupera a qtde avulsa de suplemento 
    suplemento = Number(document.getElementById("suplemento").value)
    // calcular a soma parcial
    soma = mascote + homenagem + (2 * (leite)) 
    // vamos calcular a pontuacao considerando metas de kit e supl
    equipe = document.getElementById("equipe").value
    // doação de sangue
    sangue = Number(document.getElementById("sangue").value)//document.getElementById(...).innerHTML = ... 
    //altera o conteudo html de algum elemento, Serve para atualizar a interface dinamicamente 
    // com texto ou HTML
    if (equipe == "Laranja"){
        // verifica kit e suplemento
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta"){
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }

    }
    else if (equipe == "Roxa"){
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }

    }
    else if (equipe == "Verde"){
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }

    }
    else { // equipe vermelha
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit-19) * 30) + ((suplemento - 10)* 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }

    }
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}