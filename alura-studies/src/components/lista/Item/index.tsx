// na versão atual não precisa importar o react - no function component
import { ITarefa } from '../../../types/tarefas';
import style from './Item.module.scss';

// conseguir extender uma interface na outra
interface Props extends ITarefa {
    selecionaTarefa: (tarefaSeleciona: ITarefa) => void
}

export default function item( { tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    // const { tarefa, tempo } = props  - não colocando direto no parametro tem essa linha
    return(
        // sé estiver selecionado vai ter o sass de selecionado
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : "" } ${completado ? style.itemCompletado : ""} `} 
            onClick={
                // !completado &&   ->  para ser possivel selecionar se não estiver completado
                () => !completado && selecionaTarefa({ tarefa, tempo, selecionado, completado, id }) 
                } >
            <h3> {tarefa} </h3>  
            <span> {tempo} </span>

            {/* renderização condicional */}
            {completado && <span className={style.concluido} aria-label='tarefa completada' ></span> }
        </li>
    )
}

// export default item;