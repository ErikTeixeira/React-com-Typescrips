import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
// import './style.scss';
// Usando CSS Modules - exporta um objeto - nunca tem o problema de sobreposição de css - pode ter nomes parecidos
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefas';

function App() {
  // useState pode ser ou um array de ITarefa[] ou um array vazio []
  const [tarefas, setTarefas] = useState <ITarefa[]> ([]);
  const [selecionado, setSelecionado] = useState<ITarefa> ();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    // se quiser criar uma casse no html e com className
    // <div className="AppStyle">  - css normal
    <div className={style.AppStyle} >
      {/* Renderizar um component - <nome /> */}
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}  
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
