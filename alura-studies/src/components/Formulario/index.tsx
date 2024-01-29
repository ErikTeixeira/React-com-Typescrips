// CLASS COMPONENT
import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { ITarefa } from "../../types/tarefas";
// para criar ID aleatorios que não se repetem --- npm i uuid
// para o typescript tipar ---   npm i --save-dev @types/uuid
import { v4 as uuidv4 } from 'uuid';

// Refatorando 
interface Props {
    setTarefas: React.Dispatch<React.SetStateAction< ITarefa[] >>
}

function Formulario ({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa} >
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                Adicione um novo estudo
            </label>

            <input 
                type="text"
                name="tarefa"
                id="tarefa"
                value= {tarefa}
                onChange= {evento => setTarefa(evento.target.value)}
                placeholder="O que você quer estudar?" required
            />
        </div>

        <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>

            <input type="time"
                step="1"
                name="tempo"
                value= {tempo}
                onChange= {evento => setTempo(evento.target.value) }
                id="tempo"
                min="00:00:00"
                max="01:30:00" required
            />
        </div>
        <Botao type="submit">
            Adicionar
        </Botao>

    </form>
    )
}


/*
class Formulario1 extends React.Component <{
    // colocando o mouse em cima do setTarefas aparece o tipo
    setTarefas: React.Dispatch<React.SetStateAction< ITarefa[] >>
}> {
    // so existe um state e um setState - no class já vem configurado
    // state em class component
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    // criar uma função no class components
    // evento de formulario - evento: React.FormEvent - mais completo - evento: React.FormEvent<HTMLFormElement>
    adicionarTarefa(evento: React.FormEvent) {
        // previne que de a pagina recarregue
        evento.preventDefault();
        // vai retornar todas as tarefas antigas com as novas
        this.props.setTarefas(tarefasAntigas =>
            [...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

        // resetar o state
        this.setState( {
            tarefa: "",
            tempo: "00:00"
        })

        // informação fora do escopo  -  console.log(this.state) - só funciona tendo o .bind(this) no return
    }

    render() {
        return (
            // conseguir pegar informações de fora do escopo - .bind(this)
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)} >
                <div className={style.inputContainer}>
                    {/* htmlFor - se clicar no label quer que o input seja focado /}
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>

                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value= {this.state.tarefa}
                        onChange= {evento => this.setState( {...this.state, tarefa: evento.target.value} )}
                        placeholder="O que você quer estudar?" required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>

                    <input type="time"
                        step="1"
                        name="tempo"
                        // forma que pega o valor do input que tem mudança na tela
                        value= {this.state.tempo}
                        onChange= {evento => this.setState( {...this.state, tempo: evento.target.value} )}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00" required
                    />
                </div>
                {/* Usar um component em outro  /}
                <Botao type="submit"
                    // criar uma PROP - propriedade
                    texto="Adicionar"
                    // Com o tipo Children é só Adicionar
                    // Adicionar
                />

            </form>
        )
    }
}
*/

export default Formulario;