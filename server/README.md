# NLW Agents

**Let me Ask** - Projeto desenvolvido durante o evento da **Rocketseat** para criação de uma aplicação web completa com sistema de salas e perguntas com IA.

Uma aplicação de perguntas e respostas com inteligência artificial, onde os usuários podem criar salas personalizadas, fazer perguntas e receber respostas geradas por IA.

## 🚀 Tecnologias

### Backend

- **Node.js** com TypeScript
- **Fastify** - Framework web performático
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** com pgvector - Banco de dados com suporte a vetores
- **Zod** - Validação de schemas
- **Docker** - Containerização

### Frontend

- **React 19** com TypeScript
- **Vite** - Build tool moderno
- **TailwindCSS 4** - Framework CSS utility-first
- **React Router DOM** - Roteamento
- **TanStack Query** - Gerenciamento de estado assíncrono
- **React Hook Form** - Gerenciamento de formulários
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Ícones

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd nlw-agents
```

### 2. Configure o backend

```bash
cd server
npm install
```

### 3. Configure o frontend

```bash
cd web
npm install
```

### 4. Configure o banco de dados

```bash
cd server
docker-compose up -d
```

### 5. Execute as migrações

```bash
cd server
make migrate
```

### 6. Popule o banco (opcional)

```bash
cd server
make seed
```

## 🏃‍♂️ Executando o projeto

### Backend

```bash
cd server
make dev
```

### Frontend

```bash
cd web
npm run dev
```

A aplicação estará disponível em:

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3333

## 📁 Estrutura do Projeto

```
nlw-agents/
├── server/                    # Backend da aplicação
│   ├── src/
│   │   ├── db/
│   │   │   ├── schema/        # Esquemas do banco (rooms, questions)
│   │   │   ├── migrations/    # Migrações do banco
│   │   │   └── connection.ts  # Conexão com PostgreSQL
│   │   ├── http/
│   │   │   └── routes/        # Rotas da API REST
│   │   ├── env.ts             # Configuração de ambiente
│   │   └── server.ts          # Servidor principal
│   ├── docker/                # Configuração Docker
│   └── docker-compose.yml     # PostgreSQL + pgvector
└── web/                       # Frontend da aplicação
    ├── src/
    │   ├── components/
    │   │   ├── ui/            # Componentes Shadcn/ui
    │   │   ├── create-room-form.tsx
    │   │   ├── question-form.tsx
    │   │   ├── question-item.tsx
    │   │   └── room-list.tsx
    │   ├── http/              # Hooks e tipos para API
    │   ├── lib/               # Utilitários (dayjs, utils)
    │   ├── pages/             # Páginas da aplicação
    │   └── app.tsx            # Roteamento principal
    └── public/
```

## 🎯 Funcionalidades Implementadas

### ✅ Sistema de Salas

- **Criação de salas** com nome e descrição
- **Listagem de salas** com informações resumidas
- **Navegação entre salas** com roteamento dinâmico
- **Contador de perguntas** por sala
- **Data de criação** com formatação relativa

### ✅ Sistema de Perguntas

- **Formulário de perguntas** com validação (10-500 caracteres)
- **Interface de perguntas e respostas** com IA
- **Estados visuais** para carregamento de respostas
- **Histórico de perguntas** organizadas por data

### ✅ Interface Moderna

- **Design System** completo com Shadcn/ui
- **Tema dark** por padrão
- **Componentes reutilizáveis** (Cards, Buttons, Forms)
- **Responsividade** total
- **Animações** e transições suaves

### ✅ API REST Completa

- **CRUD de salas** (Create, Read)
- **CRUD de perguntas** (Create, Read)
- **Validação** com Zod
- **Tipagem** TypeScript end-to-end
- **CORS** configurado para desenvolvimento

## 📡 Endpoints da API

### Salas

- `GET /health` - Health check
- `GET /rooms` - Lista todas as salas com contador de perguntas
- `POST /rooms` - Cria uma nova sala

### Perguntas

- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala
- `POST /rooms/:roomId/questions` - Cria nova pergunta

## �️ Scripts Disponíveis

### Backend

```bash
npm run dev          # Servidor em desenvolvimento
npm run start        # Servidor em produção
npm run db:seed      # Popula banco com dados de teste
make generate        # Gera migrações
make migrate         # Executa migrações
make studio         # Abre Drizzle Studio
make format         # Formata código
```

### Frontend

```bash
npm run dev         # Servidor de desenvolvimento
npm run build       # Build para produção
npm run preview     # Preview da build
make format         # Formata código
```

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente (Backend)

```env
# server/.env
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```

### Banco de Dados

O projeto utiliza PostgreSQL com a extensão pgvector para suporte a vetores de IA:

- **Imagem**: `pgvector/pgvector:pg17`
- **Usuário**: `docker`
- **Senha**: `docker`
- **Database**: `agents`
- **Porta**: `5432`

## 🎨 Design System

### Componentes UI

- **Shadcn/ui** com tema personalizado
- **Radix UI** como base primitiva
- **Tailwind CSS** para estilização
- **Lucide React** para ícones consistentes

### Tema e Cores

- **Tema dark** por padrão
- **Paleta**: Zinc como cor base
- **Tipografia**: Sistema de fontes otimizado
- **Espacamento**: Grid system do Tailwind

## 📱 Páginas da Aplicação

### 🏠 Página Inicial (`/`)

- **Grid layout** com duas colunas
- **Formulário de criação** de salas (esquerda)
- **Lista de salas** recentes (direita)
- **Navegação rápida** para salas existentes

### 🎯 Página da Sala (`/room/:roomId`)

- **Header** com navegação e botão de áudio
- **Formulário de perguntas** com validação
- **Lista de perguntas** e respostas
- **Estados de carregamento** para IA

## 🔄 Fluxo de Dados

1. **Criação de sala**: Form → API → Database → Atualização da lista
2. **Listagem**: Cache TanStack Query → Renderização otimizada
3. **Perguntas**: Validação → API → Database → Interface de resposta
4. **Navegação**: React Router → Lazy loading → SEO otimizado
