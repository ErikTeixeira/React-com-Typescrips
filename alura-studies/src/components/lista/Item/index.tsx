// na versão atual não precisa importar o react - no function component
import style from '../Lista.module.scss';

export default function item( { tarefa, tempo }: { tarefa: string, tempo: string }) {
    // const { tarefa, tempo } = props  - não colocando direto no parametro tem essa linha
    return(
        <li className={style.item}>
            <h3> {tarefa} </h3>  
            <span> {tempo} </span>
        </li>
    )
}

// export default item;