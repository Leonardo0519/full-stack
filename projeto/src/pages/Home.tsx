import { useState } from "react";


type Tarefa = {
  id: number;
  titulo: string;
};

function Home() {
  const [titulo, setTitulo] = useState<string>("");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);




  function adicionarTarefa() {
    const tarefaExistente = tarefas.some((tarefa) => tarefa.titulo.toLowerCase() === titulo.toLowerCase());

    if (tarefaExistente) {
      alert("Essa tarefa já existe na lista.");
      return;
    }  
    
    const validacaoTitulo = titulo.trim();

   if (validacaoTitulo.length < 3) {
    alert("O título da tarefa deve conter pelo menos 3 caracteres.");
    return;
   }
    const novaTarefa: Tarefa ={
      id: Date.now(),
      titulo: validacaoTitulo,
    };
    setTarefas([...tarefas, novaTarefa]);
    setTitulo("");
  };

  function removerTarefa(id: number) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };



return (
  <div> 
    <h2>Pagina Inicial</h2>

    <div>
      <p> contador de tarefas: {tarefas.length} </p>
      <h2> Lista de Tarefas </h2>

      <input 
      type="text" 
      placeholder="Digite uma tarefa"
      value={titulo}
      onChange={(e) => setTitulo(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      
      
      <ul>
        {tarefas.map(tarefas => (
          <li key={tarefas.id}>
            {tarefas.titulo}
            <button onClick={() => removerTarefa(tarefas.id)}>Remover</button>
          </li>
        ))}
      </ul>

    </div>
    
  </div>
)
};
export default Home;
