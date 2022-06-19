const email = document.querySelector(".email")
const senha = document.querySelector(".senha")
const test = document.querySelectorAll(".teste")
const btn = document.querySelector(".btn")

email.addEventListener("input", () => {
    email1()
})


senha.addEventListener("input", () => {
    senha1()
})



test.forEach((e) => {
    e.addEventListener("change", () => {
        if(email.classList.contains("is-valid") && senha.classList.contains("is-valid") || (email.classList.contains("teste") && senha.classList.contains("is-valid"))){
            btn.removeAttribute("disabled");
        }else {
            btn.setAttribute("disabled", "");
        }
    })
})



function senha1(){
    if (senha.value.length > 0){
        senha.classList.remove("is-valid")
        senha.classList.add("is-valid")
    }else {
        senha.classList.remove("is-valid")
    }
}

function email1(){
    if (email.value.length > 0){
        email.classList.add("teste")
    }else {
        email.classList.remove("teste")
    }
    if(email.value.includes("@gmail.com")){
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }if (email.value.length == 0){
        email.classList.remove("is-valid")
        email.classList.remove("is-invalid")
    }else if (!email.value.includes("@gmail.com")){
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
    }
}

