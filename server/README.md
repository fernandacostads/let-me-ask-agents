# 🚀 server-project

Projeto desenvolvido durante o NLW Agents, focado em processamento de áudios, transcrição, geração de embeddings e respostas automáticas utilizando IA generativa.

## ✨ Funcionalidades

- 🎙️ Upload de áudios para transcrição automática
- 📝 Geração de embeddings para busca semântica
- 🤖 Respostas automáticas baseadas no conteúdo transcrito
- 🏠 Organização por salas (rooms)
- ❓ Cadastro e consulta de perguntas e respostas

## 🛠️ Tecnologias Utilizadas

- ⚡ **Node.js**
- 🔥 **Fastify** — Framework web rápido e eficiente
- 🧬 **Drizzle ORM** — ORM para integração com PostgreSQL
- 🐘 **PostgreSQL** — Banco de dados relacional
- 🧪 **Zod** — Validação de esquemas
- 🧩 **Google Gemini API** — IA generativa para transcrição e respostas
- 🐳 **Docker** — Containerização do ambiente

## 📦 Estrutura Principal

- `src/db/` — Migrations, schemas e seed do banco
- `src/http/routes/` — Rotas HTTP da API
- `src/services/` — Integração com serviços externos (Gemini)

## 📚 Rotas da API

### Salas

- `GET /rooms` — Lista todas as salas
  - 🔍 Retorna nome, data de criação e quantidade de perguntas
- `POST /rooms` — Cria uma nova sala
  - 🏷️ Parâmetros: `name`, `description`

### Áudio

- `POST /rooms/:roomId/audio` — Faz upload de um áudio para uma sala
  - 📎 Parâmetro: arquivo de áudio (multipart)
  - 🔄 Transcreve e armazena o texto e embeddings

### Perguntas

- `POST /rooms/:roomId/questions` — Cria uma pergunta para uma sala
  - ❓ Parâmetro: `question`
  - 🤖 Retorna resposta automática baseada no conteúdo da sala
- `GET /rooms/:roomId/questions` — Lista perguntas e respostas de uma sala

### Healthcheck

- `GET /health` — Verifica se o servidor está online

## 🔄 Fluxo de Uso

1. Crie uma sala (`POST /rooms`)
2. Faça upload de áudios para a sala (`POST /rooms/:roomId/audio`)
3. Cadastre perguntas para a sala (`POST /rooms/:roomId/questions`)
4. Consulte perguntas e respostas (`GET /rooms/:roomId/questions`)

## 📝 Observações

- É necessário configurar as variáveis de ambiente, incluindo a chave da API Gemini e a URL do banco PostgreSQL.
- O projeto utiliza Docker para facilitar o setup do banco de dados.

---

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

### 3. Configure o banco de dados

```bash
cd server
docker-compose up -d
```

### 4. Execute as migrações

```bash
cd server
make migrate
```

### 5. Popule o banco (opcional)

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

A aplicação estará disponível em:

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
