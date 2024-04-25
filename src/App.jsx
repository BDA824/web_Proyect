import React, { useState } from 'react';
import { Formulario } from './Components/Formulario';
import { Registro } from './Components/Registro';
import './App.css';

function App() {
  const [view, setView] = useState('login');

  return (
      <div className="app-container">
        {view === 'login' && <Formulario changeView={setView} />}
        {view === 'registro' && <Registro changeView={setView} />}
      </div>
  );
  }

export default App;
