# 🧠 NLW Agents – Projeto Fullstack com IA Generativa

Aplicação **fullstack** desenvolvida durante o **NLW Agents** da Rocketseat, combinando frontend moderno com backend escalável. O sistema permite **transcrição de áudios, geração de embeddings e respostas automáticas** com inteligência artificial, integrando tudo em um único repositório com **client e server**.

## ⚙️ Principais Funcionalidades

- 🎙️ Upload e transcrição automática de áudios
- 🧠 Geração de embeddings e busca semântica
- 🤖 Respostas automáticas com IA (Google Gemini)
- 🏠 Organização por salas (rooms)
- ❓ Histórico de perguntas e respostas por sala

## 🧪 Tecnologias Utilizadas

### Backend

- **Node.js** + **Fastify**
- **Drizzle ORM** + **PostgreSQL** (com extensão **pgvector**)
- **Google Gemini API** (IA generativa)
- **Zod** para validação de dados
- **Docker** para ambiente isolado

### Frontend

- **React 19** + **TypeScript**
- **Vite** para build e desenvolvimento
- **TailwindCSS** + **Shadcn/ui** + **Radix UI**
- **TanStack React Query** para estado assíncrono
- **React Hook Form** + **Zod** para formulários
- **Web APIs** para gravação de áudio no navegador

## 🚀 Fluxo de Uso

1. **Crie uma sala**
2. **Faça upload de um áudio** para transcrição
3. **Envie perguntas** com base no conteúdo da sala
4. **Receba respostas automáticas** geradas pela IA
5. **Consulte histórico** de interações por sala

## ✅ Destaques

- API REST completa (Rooms, Questions, Audio)
- Design responsivo com tema dark
- Integração de IA para transcrição e respostas
- Suporte a gravação de áudio via navegador
- Setup simples com Docker + PostgreSQL

## 📦 Requisitos

- Node.js 18+
- Docker e Docker Compose
- Navegador compatível com Web Speech API (para gravação)
