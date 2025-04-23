let salario = document.getElementById("salario")
let calcular = document.getElementById("calcular")
let cinquenta = document.getElementById("cinquenta")
let trinta = document.getElementById("trinta")
let vinte = document.getElementById("vinte")

calcular.addEventListener("click", (e) => {
    let salarioo = salario.value

    let salario50 = salarioo*0.5
    let salario30 = salarioo*0.3
    let salario20 = salarioo*0.2

    cinquenta.innerHTML = `50% do salário: R$${salario50}`
    trinta.innerHTML = `30% do salário: R$${salario30}`
    vinte.innerHTML = `20% do salário: R$${salario20}`
})