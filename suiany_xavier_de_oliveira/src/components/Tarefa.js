import React from 'react';
import { useTarefas } from '../context/TarefaContext';
import './Tarefa.css';

// Componente Tarefa — representa uma tarefa individual da lista
function Tarefa({ tarefa }) {
  const { toggleTarefa, deleteTarefa } = useTarefas();

  return (
    <div className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => toggleTarefa(tarefa.id)}
        aria-label={`Marcar "${tarefa.nome}" como ${tarefa.concluida ? 'pendente' : 'concluída'}`}
      />

      <span className={`tarefa-nome ${tarefa.concluida ? 'riscado' : ''}`}>
        {tarefa.nome}
      </span>

      <span className={`badge ${tarefa.concluida ? 'badge-concluida' : 'badge-pendente'}`}>
        {tarefa.concluida ? 'Concluída' : 'Pendente'}
      </span>

      <button
        className="btn-remover"
        onClick={() => deleteTarefa(tarefa.id)}
        aria-label={`Remover tarefa "${tarefa.nome}"`}
      >
        ✕
      </button>
    </div>
  );
}

export default Tarefa;
