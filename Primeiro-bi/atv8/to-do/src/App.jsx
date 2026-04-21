import { useState } from "react";
import "./css/index.css";

export default function () {
  const [lista, setLista] = useState([]);
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    if (tarefa) {
      const novaLista = {
        id: Date.now(),
        text: tarefa,
      };

      setLista([...lista, novaLista]);
      console.log(novaLista);
      setTarefa("");
    } else {
      console.log("n pode valor vazio");
    }
  }

  function removerTarefa(idQueVaiSumir) {
    const listaFiltrada = lista.filter((item) => item.id !== idQueVaiSumir);
    setLista(listaFiltrada);
    {
      /*esse carai aqui: (!==) valia o valor e o tipo */
    }
  }

  return (
    <main>
      <h1>To-do List</h1>
      <input
        type="text"
        placeholder="Digite aqui..."
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removerTarefa(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
