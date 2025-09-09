# 📚 BookNest – Frontend

Este repositório contém a interface do usuário do **BookNest**, uma aplicação para explorar e gerenciar livros.  
⚠️ **Importante:** para que a aplicação funcione corretamente, é necessário também rodar o **backend localmente**.

---

## 🚀 Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Backend do BookNest](https://github.com/isab5/API-BookNest.git)

---

## 📦 Clonando o projeto

### Clone o repositório do frontend
```bash
git clone https://github.com/isab5/BookNest.git
```

### Entre na pasta do projeto
```bash
cd BookNest
```


# ⚙️ Instalação do Back-End

Instale as dependências do projeto:

```bash
Copiar código
# Usando npm
npm install

# ou usando yarn
yarn install
```

# 🔗 Configuração do Backend
A aplicação depende do backend para funcionar.
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

http://localhost:3001

⚠️ Deixe o backend rodando em um terminal separado antes de iniciar o frontend.

▶️ Rodando o Frontend
Depois que o backend estiver rodando, inicie o frontend:

```bash
Copiar código
# Usando npm
npm run dev
# ou usando yarn
yarn dev
```

A aplicação estará disponível em:
👉 http://localhost:3000

🛠️ Tecnologias utilizadas
Next.js – Framework React

Axios – Requisições HTTP


📚 Estrutura do Projeto
bash
Copiar código
BookNest/
├── app/              # Páginas e rotas do Next.js
├── components/       # Componentes reutilizáveis
├── styles/           # Estilos globais
└── ...

# 🤝 Contribuição
Contribuições são bem-vindas!
Siga os passos:

Faça um fork do projeto

Crie uma branch (git checkout -b minha-feature)

Commit suas alterações (git commit -m 'feat: minha nova feature')

Envie para o repositório (git push origin minha-feature)

Abra um Pull Request

