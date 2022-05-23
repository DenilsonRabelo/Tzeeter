const tamanho = document.querySelector('#texto').maxLength;
let spanTamanho = document.querySelector(".tamanhoAgora").textContent = 200;
let aux2 = document.querySelector(".tamanhoAgora").textContent
aux2 = Number(aux2)

document.querySelector('#texto').addEventListener("input" , () => {
    const aux = document.querySelector('#texto').value
    let aux3 = aux2 - aux.length
    document.querySelector(".tamanhoAgora").textContent = aux3
    if (aux3 < 0){
        document.querySelector(".tamanhoAgora").style.color = "red"
        document.querySelector(".comment").style.border = "1px solid red";
    }else if (aux3 >= 0){
        document.querySelector(".tamanhoAgora").style.color = "black"
    }
})