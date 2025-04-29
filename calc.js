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
        let salario50 = salarioo*0.5
        let salario30 = salarioo*0.3
        let salario20 = salarioo*0.2

        dica.innerHTML = "Separe seu salário da seguinte forma:"

        cinquenta.innerHTML = `50% do salário: R$${salario50.toFixed(2)}`
        trinta.innerHTML = `30% do salário: R$${salario30.toFixed(2)}`
        vinte.innerHTML = `20% do salário: R$${salario20.toFixed(2)}`
        erro.remove()
    }else{
        erro.innerHTML = "O valor deve ser maior que 0"
        cinquenta.innerHTML.remove()
        trinta.innerHTML.remove()
        vinte.innerHTML.remove()
    }

})