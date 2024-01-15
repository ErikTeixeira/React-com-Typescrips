import React from "react";
// "Don't Repeat Yourself" -- CRIANDO UM COMPONENT NÃO PRECISA REPETIR ESTE CÓDIGO PODE REUTILIZAR ELE ONDE QUISER

// "Single Responsibility Principle", "Princípio da responsabilidade única" -- significa que se queremos um botão e um formulário que tem apenas a responsabilidade de gerenciar o próprio formulário, podemos criar um componente só para formulário e o botão será outro componente com a responsabilidade única de renderizar um botão.

class Botao extends React.Component {
    // função obrigatoria - render
    render() {
        return (
            // retorna um HTML, que da para usar JS, chamado JSX
            <button>
                Botão
            </button>
        )
    }
}


export default Botao;


// O nome do componente deve começar com letra maiúscula

// Para criarmos um componente com class components, precisamos estender à classe React.Component. Nesta classe, existe apenas uma função obrigatória chamada render e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!

// O JSX é uma forma de "escrever HTML no JS"

