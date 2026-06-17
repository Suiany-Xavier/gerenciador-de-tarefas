import React, { createContext, useContext, useReducer } from 'react';

// Estado inicial da aplicação
const estadoInicial = {
  tarefas: [
    { id: 1, nome: 'Estudar React e Hooks', concluida: true },
    { id: 2, nome: 'Ler sobre useContext e useReducer', concluida: true },
    { id: 3, nome: 'Fazer exercício de componentes', concluida: false },
    { id: 4, nome: 'Revisar conceitos de estado global', concluida: false },
  ],
  filtro: 'todas',
  nextId: 5,
};

// Reducer — gerencia as ações de forma imutável
function tarefaReducer(state, action) {
  switch (action.type) {
    case 'ADD_TAREFA':
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { id: state.nextId, nome: action.nome, concluida: false },
        ],
        nextId: state.nextId + 1,
      };

    case 'TOGGLE_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.id
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        ),
      };

    case 'DELETE_TAREFA':
      return {
        ...state,
        tarefas: state.tarefas.filter((tarefa) => tarefa.id !== action.id),
      };

    case 'SET_FILTRO':
      return {
        ...state,
        filtro: action.filtro,
      };

    default:
      return state;
  }
}

// Criação do Contexto
const TarefaContext = createContext(null);

// Provider — envolve a aplicação e disponibiliza estado + dispatch
export function TarefaProvider({ children }) {
  const [state, dispatch] = useReducer(tarefaReducer, estadoInicial);

  const addTarefa = (nome) => dispatch({ type: 'ADD_TAREFA', nome });
  const toggleTarefa = (id) => dispatch({ type: 'TOGGLE_TAREFA', id });
  const deleteTarefa = (id) => dispatch({ type: 'DELETE_TAREFA', id });
  const setFiltro = (filtro) => dispatch({ type: 'SET_FILTRO', filtro });

  const tarefasFiltradas = state.tarefas.filter((tarefa) => {
    if (state.filtro === 'concluidas') return tarefa.concluida;
    if (state.filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  const totalTarefas = state.tarefas.length;
  const tarefasConcluidas = state.tarefas.filter((t) => t.concluida).length;
  const tarefasPendentes = totalTarefas - tarefasConcluidas;

  return (
    <TarefaContext.Provider
      value={{
        tarefas: tarefasFiltradas,
        filtro: state.filtro,
        totalTarefas,
        tarefasConcluidas,
        tarefasPendentes,
        addTarefa,
        toggleTarefa,
        deleteTarefa,
        setFiltro,
      }}
    >
      {children}
    </TarefaContext.Provider>
  );
}

// Hook customizado para consumir o contexto facilmente
export function useTarefas() {
  const context = useContext(TarefaContext);
  if (!context) {
    throw new Error('useTarefas deve ser usado dentro de um TarefaProvider');
  }
  return context;
}
