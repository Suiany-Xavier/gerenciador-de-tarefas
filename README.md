<div align="center">

# ✅ Gerenciador de Tarefas

Aplicação web desenvolvida com **React.js** para gerenciar tarefas do dia a dia,
permitindo adicionar, concluir e filtrar tarefas de forma simples e intuitiva.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Estilização-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como exercício prático da disciplina de **Análise e Desenvolvimento de Sistemas**, com foco no aprendizado de componentes React reutilizáveis e gerenciamento de estado global com `useContext` e `useReducer`.

---

## ⚙️ Funcionalidades

- ✏️ **Adicionar tarefas** — via campo de texto + botão ou tecla `Enter`
- ✅ **Concluir tarefas** — marcando o checkbox ao lado de cada item
- 🗑️ **Remover tarefas** — botão de exclusão por tarefa
- 🔍 **Filtrar por status** — Todas, Pendentes ou Concluídas
- 📊 **Painel de estatísticas** — contador de total, concluídas e pendentes

---

## 🧱 Estrutura de Componentes

```
src/
├── context/
│   └── TarefaContext.js     # Contexto global com useReducer e hook useTarefas
├── components/
│   ├── Tarefa.js            # Componente de item individual (checkbox, badge, remover)
│   ├── Tarefa.css
│   ├── ListaDeTarefas.js    # Lista de tarefas + botões de filtro + estatísticas
│   └── ListaDeTarefas.css
├── App.js                   # Componente raiz + AdicionarTarefa
├── App.css
├── index.js                 # Ponto de entrada da aplicação
└── index.css
```

---

## 🧠 Conceitos Aplicados

| Conceito | Onde foi aplicado |
|---|---|
| `useReducer` | Gerenciamento do estado global das tarefas |
| `useContext` | Compartilhamento do estado entre componentes |
| Hook customizado `useTarefas` | Consumo simplificado do contexto |
| `useState` | Estado local do campo de entrada |
| Imutabilidade | Atualizações via spread operator, `.map()` e `.filter()` |
| Componentização | `App`, `ListaDeTarefas` e `Tarefa` separados por responsabilidade |

---

## 🚀 Como Executar

**Pré-requisitos:** Node.js instalado na máquina.

```bash
# 1. Clone o repositório
git clone https://github.com/Suiany-Xavier/gerenciador-de-tarefas.git

# 2. Acesse a pasta do projeto
cd gerenciador-de-tarefas

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

A aplicação abrirá automaticamente em `http://localhost:3000`.

---

## 📁 Tecnologias Utilizadas

- [React.js](https://reactjs.org/) — biblioteca para construção de interfaces
- [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) — linguagem de programação
- CSS3 — estilização dos componentes

---

## 👩‍💻 Autora

**Suiany Xavier de Oliveira**  
Estudante de Análise e Desenvolvimento de Sistemas — Faculdade Multivix, Nova Venécia/ES

[![GitHub](https://img.shields.io/badge/GitHub-Suiany--Xavier-181717?style=flat-square&logo=github)](https://github.com/Suiany-Xavier)
