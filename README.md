# Desafio: Aplicação de Gerenciamento de Tarefas

![Tela principal](/images/1.png)
![Tela Tasks](/images/2.png)
![Tela tasks marcada concluída](/images/3.png)

## Descrição

Este projeto é uma aplicação web simples para gerenciamento de tarefas, que permite aos usuários criar, visualizar, atualizar e excluir tarefas. A aplicação conta com autenticação e autorização, garantindo que apenas usuários autenticados possam acessar e gerenciar suas tarefas.

## Funcionalidades

- **Cadastro de Usuário:** Permite que os usuários se cadastrem com e-mail e senha, com validação básica de e-mail e senha.
- **Autenticação:** Implementa login e logout usando JWT (JSON Web Token). Apenas usuários autenticados têm acesso às funcionalidades de gerenciamento de tarefas.
- **Gerenciamento de Tarefas:** Usuários podem listar, adicionar, editar, marcar como concluída e excluir suas tarefas.
- **Interface de Usuário:** Interface intuitiva e responsiva criada com React, utilizando hooks para gerenciar estado e efeitos colaterais.

## Requisitos Técnicos

### Backend

- **Linguagem:** TypeScript
- **Tecnologia:** Node.js
- **Framework:** Express.js e Prisma ORM
- **Banco de Dados:** SQLite
- **Autenticação:** Implementação com JWT

### Frontend

- **Linguagem:** TypeScript
- **Tecnologia:** React
- **Gerenciamento de Estado:** React Hooks(useState, useEffect) e Context API
- **Roteamento:** React Router Dom

## Estrutura do Projeto

### Backend

- **Endpoints:**

  - **POST /api/auth/register:** Cadastro de novos usuários
  - **POST /api/auth/login:** Login de usuários
  - **GET /api/auth/home/get-all-tasks:** Listar todas as tarefas do usuário autenticado
  - **POST /api/auth/task/create-task:** Adicionar uma nova tarefa
  - **PUT /api/auth/task/edit-task/id:** Editar uma tarefa existente
  - **DELETE /api/auth/task/delete-task/:id:** Excluir uma tarefa
  - **POST Register User /api/user/register** Cadastrar um usuário
  - **POST Login User /api/user/login** Entrar na apĺicação
  - **POST Listar todos os usuários /api/user/get-all** Entrar na apĺicação

- **Autenticação:**
  - Utilização de JWT para proteger as rotas e garantir que apenas usuários autenticados possam acessar as funcionalidades de gerenciamento de tarefas.

### Frontend

- **Componentes Principais:**

  - **LoginForm:** Componente para login de usuários
  - **RegisterForm:** Componente para cadastro de novos usuários
  - **TaskList:** Componente para listar tarefas
  - **TaskForm:** Componente para adicionar e editar tarefas

- **Gerenciamento de Estado:** Utilização de hooks como `useState` e `useEffect` para gerenciar estado e efeitos colaterais. Context API foi usado para gerenciar estado global.

- **Roteamento:** Utilização de React Router para navegação entre páginas (opcional).

## Instalação

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/leofrs/teste-jack-experts
   ```

2. Navegue até o diretório do backend:

   ```bash
   cd backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o banco de dados e as variáveis de ambiente conforme o arquivo `.env.example`.

5. Inicie o servidor:

   ```bash
   npm start
   ```

### Frontend

1. Navegue até o diretório do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente para o backend.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

## Usuários

Tem no banco de dados os seguintes usuários e suas senhas para testar as funcionalidades da aplicação

- "name": "Leonardo ", "email": "leo@leo.com","password": "123"

- "name": "Leonardo2 ", "email": "leo2@leo.com","password": "1234"

- "name": "usuario2@usuario.com", "email": "usuario2@usuario.com", "password": "user123"

## Contribuição

Se desejar contribuir para o projeto, por favor, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua nova feature ou correção.
3. Faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Contato

Para dúvidas ou suporte, entre em contato com [leofrrodrigues86@gmail.com](mailto:leofrrodrigues86@gmail.com).

---
