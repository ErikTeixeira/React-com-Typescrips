import Botao from "../Botao"
import Relogio from './Relogio'
import style from './Cronometro.module.scss';
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

// desestruturar  ->  { selecionado }
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
    // selecionado?.tempo   --  ponto de interrogação porque pode ser undefined
    const [tempo, setTempo] = useState<number>();

    // hook -> useEffect. Ele sabe que existe o ciclo de vida do componente e sempre que alguma coisa mudar(a gente que fala quando muda), ele vai fazer alguma coisa que nós queremos que ele faça
    // primeiro parametro -  função que vai ser executada quando alguma coisa mudar
    // segundo parametro  - array de dependencias, todas as variáveis que queremos que ele utilize como base para executar essa função
    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])
    // useEffect  - De forma reativa, sempre que o selecionado mudar, passar para o nosso estado tempo aquele tempo do selecionado


    // FUNÇÃO RECURSIVA
    function regressiva(contador: number = 0) {
        // setTimeout - javascript - 1 param = função que quer executar, 2 param = a quantidade de milissegundos que queremos para executá-la
        // vai ser executada depois de 1 segundo
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);

                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro} >
            <p className={style.titulo} >Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper} >
                <Relogio tempo={tempo} />
            </div>
            <Botao
                onClick={() => regressiva(tempo)} 
            >
                Começar!
            </Botao>
        </div>
    )
}