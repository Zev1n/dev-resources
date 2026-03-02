<div align="center">
  <h1>Portfolio Zev</h1>
  
  <p>
    <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=flat-square" alt="Status">
    <img src="https://img.shields.io/badge/Versão-v1.0.0-blue?style=flat-square" alt="Versão">
    <img src="https://img.shields.io/badge/Licença-MIT-green?style=flat-square" alt="Licença">
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Vercel-Deploy-black?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
  </p>
</div>

<br>

<div align="justify">
O <b>Portfolio Zev</b> é um <i>portfólio pessoal profissional</i> desenvolvido por <a href="https://github.com/Zev1n">Henrique Azevedo</a>, estudante de <b>Engenharia de Software</b> da <b>PUC Minas</b> e Desenvolvedor <b>Salesforce (Pleno)</b> com mais de <b>100.000 pontos no Trailhead</b>. O projeto foi criado com o objetivo de apresentar de forma moderna, organizada e performática sua trajetória acadêmica e profissional, destacando experiências com CRM corporativo, desenvolvimento Full Stack e integração com plataformas modernas. A aplicação demonstra a aplicação prática de <b>boas práticas de engenharia de software</b>, arquitetura moderna com <b>Next.js 16</b>, internacionalização (PT/EN), integração com API do GitHub e foco em performance, escalabilidade e experiência do usuário.
</div>

---

## 📚 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação de Dependências](#-instalação-de-dependências)
    - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
    - [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autor](#-autor)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 📝 Sobre o Projeto

O **Portfolio Zev** é uma aplicação web desenvolvida para centralizar e apresentar de forma profissional a trajetória de Henrique Azevedo, destacando sua atuação como Desenvolvedor Salesforce e Desenvolvedor Full Stack.

O projeto surgiu da necessidade de possuir um portfólio moderno, performático e estruturado que representasse não apenas experiências profissionais, mas também domínio técnico em arquitetura frontend, backend e integração com APIs externas.

Atualmente, Henrique atua como **Salesforce Developer (Pleno)** trabalhando com CRM corporativo, especialmente no ecossistema Salesforce, incluindo:

- Sales Cloud
- Apex
- Flows
- Automação de Processos
- Integração de sistemas
- CRM empresarial

Além disso, possui experiência em desenvolvimento Full Stack com:

- Backend em **Java**
- Frontend com **HTML, CSS, JavaScript e React**
- Integração com banco de dados
- Boas práticas de arquitetura

O portfólio também apresenta integração dinâmica com a **API do GitHub**, permitindo que projetos públicos sejam exibidos automaticamente a partir do perfil **Zev1n**.

O projeto demonstra domínio de:

- Componentização
- Organização modular
- Server Components do Next.js
- Internacionalização com Context API
- Integração com serviços externos (GitHub e EmailJS)
- Deploy contínuo com Vercel

---

## ✨ Funcionalidades Principais

- 💼 **Página Sobre Mim:** Apresentação profissional detalhada com layout moderno
- 📂 **Projetos Dinâmicos:** Integração com a API do GitHub para exibição automática de repositórios
- 📊 **Experiências Profissionais:** Linha do tempo organizada com filtros por categoria
- 🌍 **Internacionalização (PT/EN):** Alternância de idioma em tempo real
- 📧 **Formulário de Contato Funcional:** Integração com EmailJS para envio de mensagens
- 🎨 **Interface Moderna:** Tema escuro profissional com design responsivo
- 🚀 **Deploy Automatizado:** Integração com Vercel para publicação contínua

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas e frameworks foram utilizados na construção do projeto:

### 💻 Front-end

- **Framework:** Next.js 16
- **Biblioteca UI:** React 19
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS v4
- **Ícones:** Phosphor Icons
- **Internacionalização:** Context API
- **Integração com API:** GitHub REST API
- **Envio de Email:** EmailJS

### ⚙️ Deploy

- **Plataforma:** Vercel
- **Controle de Versão:** Git + GitHub

---

## 🏗 Arquitetura

O **Portfolio Zev** adota uma arquitetura moderna baseada no **Next.js 16 com App Router**, utilizando os recursos mais recentes do framework para garantir performance, organização e escalabilidade.

### Visão Geral

A aplicação segue um padrão modular organizado em:

- **Camada de Apresentação:** Componentes React reutilizáveis
- **Camada de Roteamento:** App Router com rotas baseadas em arquivos
- **Camada de Integração:** Serviços externos (GitHub API e EmailJS)
- **Camada de Utilitários:** Helpers para manipulação de classes e funções auxiliares

### Principais Rotas

- `/` — Página inicial
- `/about` — Sobre mim
- `/experiences` — Experiências profissionais
- `/projects` — Projetos integrados ao GitHub
- `/contact` — Página de contato funcional

A integração com a API do GitHub permite a revalidação periódica dos dados, garantindo atualização automática dos projetos.

---

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js v22 ou superior
- npm ou yarn

---

### 📦 Instalação de Dependências

Clone o repositório:

```bash
git clone https://github.com/Zev1n/dev-resources.git
cd dev-resources
```

Instale as dependências:

```bash
npm install
```

---

### ⚡ Como Executar a Aplicação

Execute o projeto em modo desenvolvimento:

```bash
npm run dev -- --no-turbo
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🚀 Deploy

O projeto está configurado para deploy automático na **Vercel**.

1. Importação do repositório no painel da Vercel
2. Configuração automática do ambiente Next.js
3. Deploy contínuo a cada push na branch principal

Para testar o build localmente:

```bash
npm run build
npm start
```

---

### 📂 Estrutura de Pastas

```
portfolio-zev/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── contexts/
│   └── lib/
├── package.json
└── README.md
```

---

## 🎥 Demonstração

Em breve serão adicionadas capturas de tela demonstrando:

- Página Inicial
- Sobre Mim
- Experiências
- Projetos Integrados ao GitHub
- Página de Contato

---

## 🔗 Documentações utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub API
- EmailJS
- Vercel

---

## 👤 Autor

| 👤 Nome | GitHub |
|--------|--------|
| **Henrique Azevedo** | [@Zev1n](https://github.com/Zev1n) |

---

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças
4. Faça push para sua branch
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é distribuído sob a **Licença MIT**.
