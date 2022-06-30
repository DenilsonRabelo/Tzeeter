const checked1 = document.querySelector("#validationFormCheck3");
const checked2 = document.querySelector("#validationFormCheck2");
const btn = document.querySelector(".btn");

checked1.addEventListener("change", () => {
  if (checked1.checked) {
    btn.removeAttribute("disabled");
  }
});

checked2.addEventListener("change", () => {
  if (checked2.checked) {
    btn.setAttribute("disabled", "");
  }
});

const nomeMes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

nomeMes.forEach(function (item) {
  $(".mes").append(
    $("<option>", {
      value: item,
      text: item,
    })
  );
});

const mes = document.querySelector(".mes");
const dias = document.querySelector(".dias");
mes.addEventListener("change", () => {
    addDias(mes.value);
});


const t = document.querySelectorAll(".t")
t.forEach((e) => {
    e.addEventListener("change", () => {
        anos(dias, mes)
        
    })
})

function addDias(mes) {
  if (
    mes === "Abril" ||
    mes === "Junho" ||
    mes === "Setembro" ||
    mes === "Novembro"
  ) {
    for (let index = 1; index <= 30; index++) {
      $(".dias").append(
        $("<option>", {
          value: index,
          text: index,
        })
      );
    }
  } else if (
    mes === "Janeiro" ||
    mes === "Março" ||
    mes === "Maio" ||
    mes === "Julho" ||
    mes === "Agosto" ||
    mes === "Outubro" ||
    mes === "Dezembro"
  ) {
    $('.dias').empty()
    for (let index = 1; index <= 31; index++) {
      $(".dias").append(
        $("<option>", {
          value: index,
          text: index,
        })
      );
    }
  } else if (mes === "Fevereiro") {
    $('.dias').empty()
    for (let index = 1; index <= 29; index++) {
      $(".dias").append(
        $("<option>", {
          value: index,
          text: index,
        })
      );
    }
  }
}

function anos(dia, mes) {
  if (dia.value == 29 && mes.value === "Fevereiro") {
    $('.anos').empty()
    for (let index = 1980; index <= 2022; index++) {
      if (index % 4 == 0) {
        let i=0
        $(".anos").append(
            $("<option>", {
              value: i,
              text: index,
            })
        );
        i++
      }
    }
    
  } else {
    $('.anos').empty()
    for (let index = 1980; index <= 2022; index++) {
        let i=0
        $(".anos").append(
            $("<option>", {
              value: i,
              text: index,
            })
        );
        i++
    }
  }
}


(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


let senha1;
let senha2
document.querySelector(".senha1").addEventListener("input", () => {
    senha1 = document.querySelector(".senha1").value
    
})

document.querySelector(".senha2").addEventListener("input", () => {
  senha2 = document.querySelector(".senha2").value
  if(senha1 == senha2){
    document.querySelector(".senha2").classList.remove("is-invalid")
    document.querySelector(".senha1").classList.remove("is-invalid")
  }else {
    document.querySelector(".senha2").classList.add("is-invalid")
    document.querySelector(".senha1").classList.add("is-invalid")
  }
})





