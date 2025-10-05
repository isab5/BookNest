# 📚 BookNest – Frontend

Este repositório contém a interface do usuário do **BookNest**, uma aplicação para explorar e gerenciar livros.  
⚠️ **Importante:** para que a aplicação funcione corretamente, é necessário também rodar o **backend localmente**.

---

## 🚀 Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Backend do BookNest](https://github.com/isab5/API-BookNest.git)

---

# 📦 Clonando e Configurando o Frontend

Siga os passos abaixo para rodar o frontend do BookNest localmente:

1. **Abrir o terminal/CMD**
    ```bash
    # Windows: Win + R → cmd
    # macOS: Cmd + Space → Terminal
    ```

2. **Navegar para o local onde deseja salvar o projeto (exemplo: Desktop):**
    ```bash
    cd Desktop
    ```

3. **Criar uma pasta para o projeto:**
    ```bash
    mkdir BookNest
    ```

4. **Entrar na pasta criada:**
    ```bash
    cd BookNest
    ```

5. **Clonar o repositório do frontend:**
    ```bash
    git clone https://github.com/isab5/BookNest.git .
    ```
    > O ponto ao final do comando garante que os arquivos sejam clonados diretamente dentro da pasta BookNest.

6. **Abrir o projeto no VS Code direto do CMD (opcional):**
    ```bash
    code .
    ```

7. **Instalar as dependências:**
    ```bash
    # Usando npm
    npm install

    # ou usando yarn
    yarn install
    ```

8. **Rodar o servidor de desenvolvimento:**
    ```bash
    # Usando npm
    npm run dev

    # ou usando yarn
    yarn dev
    ```

A aplicação estará disponível em:
👉 http://localhost:3000

> **Dica:** Mantenha o backend rodando em um terminal separado para garantir o funcionamento completo do BookNest.

# 🔗  Instalação e Configuração do Backend
A aplicação depende do backend para funcionar. Você também pode seguir o passo-a-passo da instalçao no repositório do back-end: https://github.com/isab5/API-BookNest.git.

Siga os passos abaixo para rodar a API localmente:

1. Abrir terminal/CMD
```bash
# Windows: Win + R → cmd
# macOS: Cmd + Space → Terminal
```

2. Navegar para o Desktop:

```bash
cd Desktop
```

3. Crie a pasta:

```bash
mkdir API-BookNest
```

4. Entre na pasta do backend:

```bash
cd API-BookNest
```

5. Clone o repositório do backend:

```bash
git clone https://github.com/isab5/API-BookNest.git
```

6. Abrir VS Code
```bash
code .
```

7. Instale as dependências e rode o servidor (ajuste conforme o backend usa):

```bash
npm install
```
8.  Testar Projeto
```bash
npm run dev
```

O servidor será iniciado em algo como:

http://localhost:3000

⚠️ Deixe o backend rodando em um terminal separado antes de iniciar o frontend.

▶️ Rodando o Frontend
Depois que o backend estiver rodando, inicie o frontend:

Copiar código
```bash
# Usando npm
npm run dev
# ou usando yarn
yarn dev
```

A aplicação estará disponível em:
👉 http://localhost:3000

## 🛠️ Tecnologias utilizadas:

<li> Next.js – Framework React
<li>Axios – Requisições HTTP
<li>Ant Design – Requisições HTTP

## 📚 Estrutura do Projeto

Copiar código:
```bash
BookNest/
├── public/           # Arquivos estáticos (imagens, favicon, etc)
├── app/              # Páginas e rotas (Next.js App Router)
│   ├── page.tsx      # Página inicial
│   └── ...           # Outras páginas
├── components/       # Componentes reutilizáveis (ex: Header, Footer, BookCard)    
├── README.md
└── ...
```

# 🤝 Contribuição
Contribuições são bem-vindas!
Siga os passos:

Faça um fork do projeto

Crie uma branch (git checkout -b minha-feature)

Commit suas alterações (git commit -m 'feat: minha nova feature')

Envie para o repositório (git push origin minha-feature)

Abra um Pull Request

