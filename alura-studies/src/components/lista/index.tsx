// FUNCTION COMPONENT  - É MAIS USADO
import React from "react";

// Não tem função obrigatorio - não precisa do render
function Lista() {
    const tarefas = [{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "Javascript",
        tempo: "01:00:00"
    }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]

    return (
        <aside>
            <h2>Estudos do Dia</h2>
            <u>
                { tarefas.map( (item, index) => (
                    // react precisa de uma KEY para ter uma renderização dinamica
                    <li key={index}>
                        <h3> {item.tarefa} </h3>  
                        <span> {item.tempo} </span>
                    </li>
                ) ) }
            </u>
        </aside>
    )
}

export default Lista;