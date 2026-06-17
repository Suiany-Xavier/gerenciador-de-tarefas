import React, { useState } from 'react';
import { TarefaProvider, useTarefas } from './context/TarefaContext';
import ListaDeTarefas from './components/ListaDeTarefas';
import './App.css';

// Componente de entrada — separado para poder consumir o contexto
function AdicionarTarefa() {
  const [inputValor, setInputValor] = useState('');
  const { addTarefa } = useTarefas();

  const handleAdicionar = () => {
    const nome = inputValor.trim();
    if (!nome) return;
    addTarefa(nome);
    setInputValor('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdicionar();
  };

  return (
    <div className="input-row">
      <input
        type="text"
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nova tarefa..."
        maxLength={120}
        aria-label="Nome da nova tarefa"
      />
      <button className="btn-adicionar" onClick={handleAdicionar}>
        + Adicionar
      </button>
    </div>
  );
}

// Componente App — raiz da aplicação
function App() {
  return (
    <TarefaProvider>
      <div className="app">
        <h1 className="app-titulo">✅ Gerenciador de tarefas</h1>
        <AdicionarTarefa />
        <ListaDeTarefas />
      </div>
    </TarefaProvider>
  );
}

export default App;
