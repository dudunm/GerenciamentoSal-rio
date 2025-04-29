let salario = document.getElementById("salario")
let calcular = document.getElementById("calcular")
let cinquenta = document.getElementById("cinquenta")
let trinta = document.getElementById("trinta")
let vinte = document.getElementById("vinte")
let erro = document.getElementById("erro")
let dica = document.getElementById("dica")

calcular.addEventListener("click", (e) => {

    let salarioo = salario.value

    if(salarioo > 0){

        erro.hidden = true

        cinquenta.hidden = false
        trinta.hidden = false
        vinte.hidden = false
        dica.hidden = false

        let salario50 = salarioo*0.5
        let salario30 = salarioo*0.3
        let salario20 = salarioo*0.2

        dica.innerHTML = "Separe seu salário da seguinte forma:"

        cinquenta.innerHTML = `50% do salário: R$${salario50.toFixed(2)}`
        trinta.innerHTML = `30% do salário: R$${salario30.toFixed(2)}`
        vinte.innerHTML = `20% do salário: R$${salario20.toFixed(2)}`
    }else{

        cinquenta.hidden = true
        trinta.hidden = true
        vinte.hidden = true
        dica.hidden = true

        erro.hidden = false

        erro.innerHTML = "O valor deve ser maior que 0"
    }

})