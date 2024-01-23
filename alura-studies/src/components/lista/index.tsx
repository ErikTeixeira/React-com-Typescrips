// FUNCTION COMPONENT  - É MAIS USADO
import React from "react";
import Item from './Item';
import style from './Lista.module.scss';

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
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <u>
                { tarefas.map( (item, index) => (
                    // react precisa de uma KEY para ter uma renderização dinamica
                    // <li key={index} className={style.item}>
                    //     <h3> {item.tarefa} </h3>  
                    //     <span> {item.tempo} </span>
                    // </li>
                    <Item 
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        // OU - {...item} - bom se tiver varias informações, mas pode ter informações demais e pode ter informações não tipadas  o typescript reclamar
                    />
                ) ) }
            </u>
        </aside>
    )
}

export default Lista;