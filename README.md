# UOL Compasso Desafio Front-end

<p align="center">
  <a href="#door-como-acessar-o-projeto">Como acessar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-http-server">http-server</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#indexeddb">IndexedDB</a>
</p>

## :door: [Como acessar o projeto](#uol-compasso-desafio-front-end)

- Instalar [Node.js](https://nodejs.org/en/)
- Clonar o projeto e mudar para o diretório do projeto:

```shell
git clone https://github.com/mjfneto/uol_compasso_front-end.git
cd uol_compasso_fron-end
```

Com o Node.js instalado e estando no diretório raiz do projeto, executar o seguinte na linha de comando:

```shell
npm install
```

## :rocket: [http-server](#uol-compasso-desafio-front-end)

Este projeto utiliza o pacote [`http-server`](https://www.npmjs.com/package/http-server) para iniciar um servidor local. Para iniciar o servidor e visualizar o projeto com todas as suas funcionalidades, executar:

```shell
npm start
```

O seguinte deve aparecer como resposta:

```shell
$ npm start

> uol_compasso_front-end@1.0.0 start
> http-server

Starting up http-server, serving ./
Available on:
  http://172.30.32.1:8081
  http://192.168.1.105:8081
  http://127.0.0.1:8081
Hit CTRL-C to stop the server
```

Pronto, o servidor já deve estar rodando. Por fim, basta acessar um dos três links sugeridos.

## [IndexedDB](#uol-compasso-desafio-front-end)

Este projeto faz uso da web API [IndexedDB](https://developer.mozilla.org/pt-BR/docs/Web/API/IndexedDB_API).
