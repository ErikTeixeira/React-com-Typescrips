import style from './Relogio.module.scss';

interface Props {
    // quando o tempo não tem nada ele e undefined
    tempo: number | undefined
}

// Destructor - { tempo }
// valor padrão  - tempo = 0
export default function Relogio({ tempo = 0 }: Props) {
    // converter o tempo de segundos para minutos e segundos
    // Math.floor  - arredonda numeros para baixo
    const minutos = Math.floor(tempo / 60);
    // Pegar a parte que sobrou
    const segundos = tempo % 60;

    // conseguir pegar a dezena e unidade - desestruturar a string
    // padStart -- 1 parametro e o tamanho padrão dos caracteres, e o 2 parametro o que vai ficar no lugar se não obedecer o tamanho padrão  -- serve para quando ser 1 segundo aparecer 01 
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return(
        // Da erro se colocar varias tags sem um elemento pai, mas existe formas para não precisar de um elemento pai  - 1 - <React.Fragment>   //   2 - <>  </>  = tag em branco
        <>
            <span className={style.relogioNumero} >{ minutoDezena }</span>
            <span className={style.relogioNumero} >{ minutoUnidade }</span>
            <span className={style.relogioDivisao} >:</span>
            <span className={style.relogioNumero} >{ segundoDezena }</span>
            <span className={style.relogioNumero} >{ segundoUnidade }</span>
        </>
    )
}