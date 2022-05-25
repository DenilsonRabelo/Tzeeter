const nada1 = document.querySelector(".nada")

const showInfos = () => {
    document.querySelector('#texto').addEventListener("input", () => {
        let tamanhoTexto = document.querySelector('#texto').value
        setTexto(tamanhoTexto)
        btnSendEvent(tamanhoTexto)
        avisoModal(tamanhoTexto, nada1)
    })
}

showInfos()

//evento de disable do botão
const btnSendEvent = (tamanhoTexto) => {
    let btn = document.getElementById("btn-enviar")
    if (contador(140, tamanhoTexto) < 0){
        btn.setAttribute('disabled', '')
    }else if (contador(140, tamanhoTexto) > 139){
        btn.setAttribute('disabled', '')
    }else {
        btn.removeAttribute('disabled')
    }
}



//Area para dar set no texto
const setTexto = (tamanhoTexto) => {
    if (tamanhoTexto == 0) {
        document.querySelector(".tamanhoAgora").textContent = ""
    } else {
        let tamanho = document.querySelector(".tamanhoAgora")
        tamanho.textContent = contador(140, tamanhoTexto)
        setColor(tamanho, contador(140, tamanhoTexto))
    }
}

//Contador do span
const contador = (valorSpan, tamanhoTexto) => {
    return valorSpan - tamanhoTexto.length
}


//area para dar set na cor do span
const setColor = (tamanho, valorSpanAtual) => {
    if (tamanho.value != 0) {
        if (valorSpanAtual < 0) {
            document.querySelector(".tamanhoAgora").style.color = "rgb(255, 0, 0)"
        } else if (valorSpanAtual <= 40 && valorSpanAtual >= 0) {

            document.querySelector(".tamanhoAgora").style.color = "rgb(255, 200, 0)"

        } else if (valorSpanAtual > 41) {
            document.querySelector(".tamanhoAgora").style.color = "black"
        }
    }
}


const avisoModal = (tamanhoTexto, modal) => {
        const mod = document.querySelector(".existe")
        if (mod === null && tamanhoTexto.length > 140){
            let div = document.createElement("div")
            div.classList.add("alert","alert-warning","existe")
            div.textContent = "Limite de caracteres atigindos"
            modal.appendChild(div)
        }else if (mod !== null && tamanhoTexto.length <= 140){
            document.querySelector(".existe").remove()
            
        }
}




