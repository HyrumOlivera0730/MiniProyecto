# User Management API

Este projeto é uma aplicação simples que utiliza Node.js e MySQL para gerenciar usuários. A aplicação permite listar, exportar e importar usuários em formato CSV.

## Índice

- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Uso](#uso)
- [API Endpoints](#api-endpoints)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/user-management-api.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd user-management-api
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração do Banco de Dados

1. Certifique-se de ter o MySQL instalado e em execução.
2. Crie um banco de dados chamado `miniProjecto`.
3. Importe a estrutura e os dados do banco de dados utilizando o arquivo `miniprojecto.sql`:
    ```sh
    mysql -u root -p miniProjecto < miniprojecto.sql
    ```
4. Ajuste as configurações de conexão com o banco de dados no arquivo `js.js` se necessário:
    ```js
    const connection = mysql2.createConnection({
        host: 'localhost',
        database: 'miniProjecto',
        user: 'root',
        password: ''
    });
    ```

## Uso

1. Inicie o servidor:
    ```sh
    node js.js
    ```
2. Acesse a aplicação em seu navegador:
    ```
    http://localhost:3000
    ```

## API Endpoints

### Listar Usuários

- **Endpoint**: `/api/usuarios`
- **Método**: GET
- **Descrição**: Retorna uma lista de todos os usuários em formato JSON.

### Exportar Usuários

- **Endpoint**: `/api/usuarios/export`
- **Método**: GET
- **Descrição**: Exporta os usuários para um arquivo CSV chamado `usuarios.csv`.

### Importar Usuários

- **Endpoint**: `/api/usuarios/import`
- **Método**: GET
- **Descrição**: Importa usuários de um arquivo CSV chamado `nuevosUsuarios.csv`.

## Estrutura do Projeto

```plaintext
user-management-api/
├── index.html
├── js.js
├── style.css
├── miniprojecto.sql
├── usuarios.csv
└── nuevosUsuarios.csv
