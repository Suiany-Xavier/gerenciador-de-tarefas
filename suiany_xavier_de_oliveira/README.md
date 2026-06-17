# Gerenciador de Tarefas

Aplicação React desenvolvida como exercício de componentes, estado global e hooks.

## Funcionalidades

- Adicionar tarefas via input + botão (ou tecla Enter)
- Marcar tarefas como concluídas com checkbox
- Filtrar tarefas por status: Todas, Pendentes, Concluídas
- Remover tarefas individualmente
- Contador de estatísticas (total, concluídas, pendentes)

## Estrutura de componentes

```
src/
├── context/
│   └── TarefaContext.js   # Contexto global com useReducer
├── components/
│   ├── Tarefa.js          # Item individual de tarefa
│   ├── Tarefa.css
│   ├── ListaDeTarefas.js  # Lista + botões de filtro
│   └── ListaDeTarefas.css
├── App.js                 # Componente raiz + AdicionarTarefa
├── App.css
├── index.js
└── index.css
```

## Conceitos aplicados

- `useReducer` para gerenciar o estado global de forma imutável
- `useContext` com hook customizado (`useTarefas`) para consumo do contexto
- `useState` para estado local do campo de entrada
- Atualização imutável com spread operator, `.map()` e `.filter()`

## Como executar

```bash
npm install
npm start
```

## Autor

Suiany Xavier de Oliveira
