// FUNCTION COMPONENT  - É MAIS USADO
// import React, { useState } from "react";    -  Não precisa mais
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    // tipar uma função, que vai receber uma tarefa e retorna nada
    selecionaTarefa: (tarefaSeleciona: ITarefa) => void
}


// Não tem função obrigatorio - não precisa do render
// array de tarefas  -  ITarefa[]  OU  Array<ITarefa>
function Lista( {tarefas, selecionaTarefa}: Props ) {
    /* 
    -- o react só muda na tela se tiver um estado - useState - pode até estár adicionando na lista mais sem ser useState não vai aparecer na tela
    -- é precisa tambem de um função para mudar o estado
    -- ele retorna um array onde o primeiro item é o próprio estado, ou seja, é tarefas e o segundo item é um função para podermos alterar esse estado
    -- consegue falar pro react atuallizar o componente quando adiciona algo na lista

    const [tarefas, setTarefas] = useState([{
        tarefa: "React",
        tempo: "02:00:00"
    }, {
        tarefa: "Javascript",
        tempo: "01:00:00"
    }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]);
    ---- setTarefas  =  é uma função
    */

    return (
        <aside className={style.listaTarefas}>

                {/* H2  --  onClick={() => {
                    setTarefas( [...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"} ]  )
                }} */}
            <h2>Estudos do Dia</h2>
            <u>
                { tarefas.map( (item) => (
                    // react precisa de uma KEY para ter uma renderização dinamica
                    // <li key={index} className={style.item}>
                    //     <h3> {item.tarefa} </h3>  
                    //     <span> {item.tempo} </span>
                    // </li>
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                        // tarefa={item.tarefa}
                        // tempo={item.tempo}
                        // OU - {...item} - bom se tiver varias informações, mas pode ter informações demais e pode ter informações não tipadas  o typescript reclamar
                    />
                ) ) }
            </u>
        </aside>
    )
}

export default Lista;