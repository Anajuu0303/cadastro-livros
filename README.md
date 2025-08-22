# 📚 Biblioteca – Spring Boot + Vue.js

Aplicação simples para **cadastrar, listar, filtrar e remover livros**, com **backend em Spring Boot** e **frontend em Vue.js**.

---

## 🔧 Tecnologias

**Backend**
- Spring Boot 3 (API REST)
- Spring Web + Spring Data JPA
- H2 Database (em memória, para testes)
- Lombok
- Maven

**Frontend**
- Vue.js 2 (standalone, via CDN)
- Axios (requisições HTTP)
- Bootstrap 5 + Bootstrap Icons

---

## 📂 Estrutura

```
biblioteca/
├─ pom.xml
├─ src/main/java/com/techplus/
│  ├─ BackendSpringApplication.java
│  ├─ controller/LivroController.java
│  ├─ model/Livro.java
│  └─ repository/LivroRepository.java
├─ src/main/resources/application.properties
└─ frontend-vue/
   ├─ index.html
   └─ app.js
```

---

## 🚀 Como rodar

### 1. Backend
Pré-requisito: **Java 17+** e **Maven** instalados.

```bash
cd biblioteca
mvn clean install
mvn spring-boot:run
```

A API sobe em: `http://localhost:8080/livros`

---

### 2. Frontend
Opção rápida: abrir `frontend-vue/index.html` no navegador.  
Opção recomendada: rodar servidor estático.

```bash
cd frontend-vue
npm install -g http-server
http-server -p 3000
```

Acesse: `http://localhost:3000`

---

## 🔗 API Endpoints

- `GET /livros` → lista livros  
- `POST /livros` → adiciona livro  
  ```json
  { "titulo": "O Hobbit", "autor": "Tolkien", "data": "2025-08-21" }
  ```
- `DELETE /livros/{id}` → remove livro  

---

## ⚙️ Como funciona

1. Usuário interage no **Vue.js** (formulário e lista).  
2. Vue usa **Axios** para enviar requisições ao backend.  
3. O **Spring Boot** recebe no `LivroController` e usa o **LivroRepository** (Spring Data JPA) para persistir no **H2**.  
4. Resposta JSON volta para o frontend e a lista é atualizada automaticamente.  

---
