# 🍫 Chocotan — Website Oficial da Marca de Chocolates

Bem-vindo ao repositório do **Chocotan**, o site oficial da marca de chocolates artesanais.  
Este projeto inclui **frontend** (HTML, CSS e JavaScript puro) e **backend** (Node.js + Express + MySQL), sendo totalmente responsivo para desktop e mobile.

---

## 📌 Funcionalidades do Projeto

### 🔸 Frontend (HTML + CSS + JS)

- Página inicial com:
  - Hero Section mostrando o produto principal
  - História da marca
  - Seção de produtos
  - Seção “onde comprar”
  - Contato
- Layout responsivo para PC, tablet e celular
- Paleta de cores "doce" baseada em chocolate 🍫 + creme 🧁
- Animações suaves
- Galeria de produtos
- Página individual de produto
- Menu mobile hambúrguer

---

## 📌 Backend (Node.js + Express + MySQL)

### 🔧 Recursos da API

| Método | Rota                | Descrição                |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/produtos`     | Lista todos os produtos  |
| GET    | `/api/produtos/:id` | Busca um produto pelo ID |
| POST   | `/api/produtos`     | Cria um novo produto     |
| PUT    | `/api/produtos/:id` | Atualiza um produto      |
| DELETE | `/api/produtos/:id` | Deleta um produto        |

### 🔧 Estrutura do Produto

Um produto deve conter:

```json
{
  "nome": "Chocolate ao Leite 40%",
  "descricao": "Chocolate artesanal cremoso com 40% de cacau.",
  "preco": 12.9,
  "imagem": "https://meusite.com/imagens/produto1.jpg"
}
```

---

## 🗄 Banco de Dados (MySQL)

### 📌 Tabela `produtos`

```sql
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  imagem VARCHAR(500)
);
```

---

# 🚀 Como Rodar o Projeto

## 🔧 1. Clone o Repositório

```bash
git clone https://github.com/seuusuario/chocotan.git
cd chocotan
```

---

## 📌 2. Instale as Dependências (Backend)

```bash
cd backend
npm install
```

---

## 🗂 3. Configure o Banco de Dados

Altere o arquivo:

```
backend/config/db.js
```

Com seus dados:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chocotan",
});
```

---

## ▶ 4. Inicie o Servidor Backend

```bash
npm start
```

O servidor iniciará em:

```
http://localhost:3000
```

---

# 🧪 Como Testar as Rotas

### Usando Postman/Thunder Client

### ➤ Criar Produto (POST)

```
POST http://localhost:3000/api/produtos
```

Body (JSON):

```json
{
  "nome": "Chocolate Branco Cremoso",
  "descricao": "Chocolate artesanal branco com textura aveludada.",
  "preco": 14.99,
  "imagem": "https://meusite.com/img/branco.jpg"
}
```

### ➤ Listar Produtos (GET)

```
GET http://localhost:3000/api/produtos
```

### ➤ Buscar por ID (GET)

```
GET http://localhost:3000/api/produtos/1
```

### ➤ Atualizar (PUT)

```
PUT http://localhost:3000/api/produtos/1
```

### ➤ Deletar (DELETE)

```
DELETE http://localhost:3000/api/produtos/1
```

---

# 🎨 Paleta de Cores (Tema Doce)

| Cor                | Hex       | Uso                   |
| ------------------ | --------- | --------------------- |
| Chocolate escuro   | `#4E2A1E` | Títulos, navbar       |
| Chocolate ao leite | `#8C4A33` | Botões, destaques     |
| Creme              | `#F5E0C3` | Background            |
| Creme claro        | `#FFF6E9` | Cards, áreas internas |
| Caramelo           | `#D8A25E` | Chamadas e detalhes   |

---

# 📁 Estrutura de Pastas

```
chocotan/
│
├── backend/
│   ├── config/db.js
│   ├── routes/produtos.js
│   ├── controllers/produtosController.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── produtos.html
    ├── /css
    ├── /js
    └── /img
```

---

# 📌 Tecnologias Utilizadas

### **Frontend**

- HTML5
- CSS3
- JavaScript

### **Backend**

- Node.js
- Express.js
- MySQL

---

# 🧑🏾💻 Autor

Projeto criado por **Caike H. F. Felipe (Chocotan)** 🍫🔥

---
