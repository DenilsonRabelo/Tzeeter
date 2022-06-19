const checked1 = document.querySelector("#validationFormCheck3")
const checked2 = document.querySelector("#validationFormCheck2")
const btn = document.querySelector(".btn")


checked1.addEventListener("change", () => {
    if(checked1.checked){
        btn.removeAttribute("disabled");
    }
})


checked2.addEventListener("change", () => {
    if(checked2.checked){
        btn.setAttribute("disabled", "");
    }
})