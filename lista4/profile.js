const modal = document.querySelector(".nada");
const modal2 = document.querySelector(".nada2");

const showInfos = () => {
  document.querySelector("#texto").addEventListener("input", () => {
    let tamanhoTexto = document.querySelector("#texto").value;
    const spanTamanho = document.querySelector(".tamanhoAgora");
    setTexto(tamanhoTexto, spanTamanho);
    btnSendEvent(tamanhoTexto, "btn-enviar");
    avisoModal(tamanhoTexto, modal);
  });

  //Como o Modal não está em focus, o javascript não consegue pegar a classe, por isso o if
  //poderia colocar um addEventListener com "focus" para o modal mas não consegui fazer pois qundo fecho o modal ele deixava de existir//
  if (document.querySelector("#texto2")) {
    document.querySelector("#texto2").addEventListener("input", () => {
      let tamanhoTexto2 = document.querySelector("#texto2").value;
      const spanTamanho2 = document.querySelector(".tamanhoAgora2");
      setTexto(tamanhoTexto2, spanTamanho2);
      btnSendEvent(tamanhoTexto2, "btn-enviar2");
      avisoModal(tamanhoTexto2, modal2);
    });
  }
};

showInfos();

//evento de disable do botão
const btnSendEvent = (tamanhoTexto, nomebtn) => {
  let btn = document.getElementById(nomebtn);
  if (contador(140, tamanhoTexto) < 0) {
    btn.setAttribute("disabled", "");
  } else if (contador(140, tamanhoTexto) > 139) {
    btn.setAttribute("disabled", "");
  } else {
    btn.removeAttribute("disabled");
  }
};

//Area para dar set no texto
const setTexto = (tamanhoTexto, tamanhospan) => {
  if (tamanhoTexto == 0) {
    tamanhospan.textContent = "";
  } else {
    let tamanho = tamanhospan;
    tamanho.textContent = contador(140, tamanhoTexto);
    setColor(tamanho, contador(140, tamanhoTexto));
  }
};

//Contador do span
const contador = (valorSpan, tamanhoTexto) => {
  return valorSpan - tamanhoTexto.length;
};

//area para dar set na cor do span
const setColor = (tamanho, valorSpanAtual) => {
  if (tamanho.value != 0) {
    if (valorSpanAtual < 0) {
      tamanho.style.color = "rgb(255, 0, 0)";
    } else if (valorSpanAtual <= 40 && valorSpanAtual >= 0) {
      tamanho.style.color = "rgb(255, 200, 0)";
    } else if (valorSpanAtual > 41) {
      tamanho.style.color = "black";
    }
  }
};

const avisoModal = (tamanhoTexto, modal) => {
  const mod = document.querySelector(".existe");
  if (mod === null && tamanhoTexto.length > 140) {
    let div = document.createElement("div");
    div.classList.add("alert", "alert-warning", "existe");
    div.textContent = "Limite de caracteres atigindos";
    modal.appendChild(div);
  } else if (mod !== null && tamanhoTexto.length <= 140) {
    document.querySelector(".existe").remove();
  }
};
