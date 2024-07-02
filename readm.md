# PoC WebSocket

Este projeto é uma Prova de Conceito (PoC) para demonstrar a utilização de WebSockets em uma aplicação web. Ele foi desenvolvido com o intuito de explorar as funcionalidades e capacidades dessa tecnologia para comunicação em tempo real entre clientes e servidores.

## Funcionalidades

- **Status da conexão**: Mostra o status atual da conexão WebSocket (conectado/desconectado).
- **Hora do servidor atualizado segundo a segundo**: Exibe a hora do servidor que é atualizada a cada segundo.
- **Resposta padrão no chat de 'recebido'**: O servidor envia uma resposta padrão "recebido" no chat ao receber uma mensagem.
- **Envio de JSON para o cliente**: O servidor, ao receber um POST em `/send-json`, envia esse mesmo JSON para o cliente, que o renderiza.


## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- React
- Express
- Node.js
- WebSocket

## Estrutura do Projeto

- **front/**: Código da Página Web de comunicação com servidor.
- **server/**: Contém o código do servidor.
  - `server.js`: Código do servidor Node.js que gerencia a comunicação via WebSocket.

## Como Executar


Navegue até o diretório do projeto:

1. Inicie o servidor:
   - Navegue até a pasta:
    ```sh
    cd server
    ```
    - Instale dependências:
    ```sh
    npm install
    ```

    - Inicie o servidor:
    ```sh
    npm start
    ```
2. Inicie o front-end (terminal 2):
    - Navegue até a pasta:
    ```sh
    cd front
    ```
    - Instale dependências:
    ```sh
    npm install
    ```

    - Inicie o servidor:
    ```sh
    npm start
    ```

