import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/lista';
// import './style.scss';
// Usando CSS Modules - exporta um objeto - nunca tem o problema de sobreposição de css - pode ter nomes parecidos
import style from './App.module.scss';

function App() {
  return (
    // se quiser criar uma casse no html e com className
    // <div className="AppStyle">  - css normal
    <div className={style.AppStyle} >
      {/* Renderizar um component - <nome /> */}
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
