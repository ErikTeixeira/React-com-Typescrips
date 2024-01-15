import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/lista';

function App() {
  return (
    <div className="App">
      {/* Renderizar um component - <nome /> */}
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
