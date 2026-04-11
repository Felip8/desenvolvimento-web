const formInput = document.getElementById("form-input");

const botaoAdicionar = document.getElementById("botao-adicionar");

const lista = document.getElementById("list");

function adicionar() {
  event.preventDefault();

  const tarefaTexto = formInput.value;

  if (tarefaTexto === "") {
    alert("NÃO PODE CAMPO VAZIO!!!!!");
    return;
  }

  const novaTarefa = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const texto = document.createElement("span");
  texto.innerHTML = tarefaTexto;

  checkbox.onchange = function () {
    texto.style.textDecoration = checkbox.checked ? "line-through" : "none";
  };

  const botaoTarefa = document.createElement("button");
  botaoTarefa.innerText = "❌";
  botaoTarefa.onclick = function () {
    novaTarefa.remove();
  };

  novaTarefa.appendChild(checkbox);
  novaTarefa.appendChild(texto);
  novaTarefa.appendChild(botaoTarefa);

  lista.appendChild(novaTarefa);
  //aqui em cima ele cria o texto do li e depois em baixo ele coloca um botão no mesmo texto, logo ele vai ficar do lado muito foda. E quando eu clico no excluir ele deleta a novaTarefa inteira tirando tanto o botão quanto o texto

  formInput.value = "";
}
