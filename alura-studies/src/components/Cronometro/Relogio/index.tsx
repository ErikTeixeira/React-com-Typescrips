import style from './Relogio.module.scss';

export default function Relogio() {
    return(
        // Da erro se colocar varias tags sem um elemento pai, mas existe formas para não precisar de um elemento pai  - 1 - <React.Fragment>   //   2 - <>  </>  = tag em branco
        <>
            <span className={style.relogioNumero} >0</span>
            <span className={style.relogioNumero} >0</span>
            <span className={style.relogioDivisao} >:</span>
            <span className={style.relogioNumero} >0</span>
            <span className={style.relogioNumero} >0</span>
        </>
    )
}