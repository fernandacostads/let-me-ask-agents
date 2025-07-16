# FRONT

Projeto desenvolvido durante um evento da Rocketseat para demonstrar o uso de agentes inteligentes na web.

Resumo das funcionalidades:

- 🏠 **Criação de Salas** - Crie salas personalizadas para organizar suas perguntas
- 📋 **Lista de Salas** - Visualize e acesse rapidamente salas criadas recentemente
- ❓ **Sistema de Perguntas** - Faça perguntas e receba respostas da IA
- 🎙️ **Gravação de Áudio** - Grave perguntas por áudio com transcrição automática
- 🤖 **Respostas em Tempo Real** - Interface dinâmica com estados de carregamento
- 🎨 **Interface Moderna** - Design responsivo e tema dark
- 📱 **Navegação Intuitiva** - Roteamento fluido entre páginas
- ⚡ **Atualizações Otimistas** - Interface reativa sem esperar resposta do servidor

## 📂 Padrões de Projeto

- **Component Composition** - Uso de Radix UI e Shadcn/ui para componentes compostos
- **Atomic Design** - Organização dos componentes UI
- **Custom Hooks** - Hooks personalizados para lógica de negócio (HTTP)
- **Optimistic Updates** - Atualizações otimistas no TanStack Query
- **Form Handling** - React Hook Form com validação Zod
- **Type Safety** - TypeScript com tipagem estrita
- **Path Mapping** - Alias @/ para facilitar imports
- **CSS-in-JS** - Utility-first com Tailwind CSS
- **State Management** - TanStack Query para estado assíncrono
- **Media Capture** - Web APIs para gravação de áudio
- **Error Handling** - Tratamento de erros em mutations

## 🚀 Tecnologias

### Frontend

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **React Router Dom 7.6** - Biblioteca de roteamento

### Formulários e validação

- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript-first
- **Hookform Resolvers** - Integração entre React Hook Form e Zod

### Styling

- **TailwindCSS 4.1** - Framework CSS utility-first
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones
- **tw-animate-css** - Extensão de animações para Tailwind

### Utilitários

- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Day.js** - Manipulação de datas com suporte a PT-BR
- **Class Variance Authority** - Utilitário para variações de classes CSS
- **clsx & tailwind-merge** - Utilitários para manipulação de classes CSS

### Ferramentas de desenvolvimento

- **Biome** - Linter e formatter JavaScript/TypeScript
- **Ultracite** - Configuração base para Biome
- **@types/dom-speech-recognition** - Tipagem para Web Speech API

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes UI reutilizáveis (Shadcn/ui)
│   ├── create-room-form.tsx   # Formulário de criação de salas
│   ├── question-form.tsx      # Formulário para fazer perguntas
│   ├── question-item.tsx      # Componente para exibir perguntas/respostas
│   ├── question-list.tsx      # Lista de perguntas da sala
│   └── room-list.tsx          # Lista de salas criadas
├── http/
│   ├── types/                 # Tipos TypeScript para API
│   ├── use-create-room.ts     # Hook para criar salas
│   ├── use-rooms.ts           # Hook para listar salas
│   ├── use-create-question.ts # Hook para criar perguntas
│   └── use-room-questions.ts  # Hook para listar perguntas da sala
├── lib/
│   ├── dayjs.ts               # Configuração Day.js PT-BR
│   └── utils.ts               # Utilitários (cn function)
├── pages/
│   ├── create-room.tsx        # Página inicial com criação de salas
│   ├── room.tsx               # Página da sala com perguntas
│   └── record-room-audio.tsx  # Página de gravação de áudio
├── app.tsx                    # Componente principal com roteamento
├── main.tsx                   # Ponto de entrada
└── index.css                  # Estilos globais e tema
```

## API endpoints

A aplicação se conecta com os seguintes endpoints:

```bash
// Listar salas
GET /rooms

// Criar sala
POST /rooms
Content-Type: application/json
{
   "name": "string",
   "description": "string"
}

// Listar perguntas de uma sala
GET /rooms/:roomId/questions

// Criar pergunta em uma sala
POST /rooms/:roomId/questions
Content-Type: application/json
{
   "question": "string"
}

// Upload de áudio para uma sala
POST /rooms/:roomId/audio
Content-Type: multipart/form-data
{
   "file": Blob // arquivo audio.webm
}
```

## 🎯 Funcionalidades Implementadas

### 🏠 Página Inicial (`/`)

- **Criação de Salas**: Formulário com validação para nome e descrição
- **Lista de Salas**: Visualização de salas recentes com:
  - Data de criação (relativa)
  - Número de perguntas
  - Navegação rápida para salas

### 🏠 Página da Sala (`/room/:roomId`)

- **Formulário de Perguntas**: Validação de 10-500 caracteres
- **Lista de Perguntas**: Visualização dinâmica de todas as perguntas da sala
- **Respostas da IA**: Interface para perguntas e respostas com:
  - Estados de carregamento com spinner
  - Exibição condicional de respostas
  - Timestamps relativos
- **Navegação**: Botão de voltar e link para gravação de áudio
- **Atualizações Otimistas**: Interface reativa que atualiza imediatamente

### 🎙️ Página de Gravação (`/room/:roomId/audio`)

- **Gravação de Áudio**: Captura de áudio do microfone
- **Upload Automático**: Envio em chunks de 5 segundos
- **Controles de Gravação**: Iniciar/pausar gravação
- **Verificação de Suporte**: Detecção de compatibilidade do navegador
- **Configurações Otimizadas**:
  - Cancelamento de eco
  - Supressão de ruído
  - Taxa de amostragem 44.1kHz
  - Bitrate 64kbps

### 🔧 Componentes Principais

- **CreateRoomForm**: Formulário com React Hook Form + Zod
- **QuestionForm**: Sistema de perguntas com validação e estados
- **QuestionItem**: Exibição de perguntas/respostas com estados dinâmicos
- **QuestionList**: Lista otimizada com TanStack Query
- **RoomList**: Lista dinâmica com cache automático
