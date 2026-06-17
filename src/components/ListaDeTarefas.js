import React from 'react';
import { useTarefas } from '../context/TarefaContext';
import Tarefa from './Tarefa';
import './ListaDeTarefas.css';

const FILTROS = [
  { chave: 'todas', label: 'Todas' },
  { chave: 'pendentes', label: 'Pendentes' },
  { chave: 'concluidas', label: 'Concluídas' },
];

// Componente ListaDeTarefas — exibe filtros e a lista de tarefas
function ListaDeTarefas() {
  const {
    tarefas,
    filtro,
    totalTarefas,
    tarefasConcluidas,
    tarefasPendentes,
    setFiltro,
  } = useTarefas();

  return (
    <div className="lista-container">
      {/* Estatísticas */}
      <div className="stats">
        <div className="stat">
          <span className="stat-num total">{totalTarefas}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-num concluidas">{tarefasConcluidas}</span>
          <span className="stat-label">Concluídas</span>
        </div>
        <div className="stat">
          <span className="stat-num pendentes">{tarefasPendentes}</span>
          <span className="stat-label">Pendentes</span>
        </div>
      </div>

      {/* Botões de filtro */}
      <div className="filtros">
        {FILTROS.map((f) => (
          <button
            key={f.chave}
            className={`filtro-btn ${filtro === f.chave ? 'ativo' : ''}`}
            onClick={() => setFiltro(f.chave)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Lista de tarefas */}
      <div className="lista-tarefas">
        {tarefas.length === 0 ? (
          <p className="lista-vazia">
            {filtro === 'concluidas'
              ? 'Nenhuma tarefa concluída.'
              : filtro === 'pendentes'
              ? 'Nenhuma tarefa pendente.'
              : 'Nenhuma tarefa adicionada ainda.'}
          </p>
        ) : (
          tarefas.map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListaDeTarefas;
