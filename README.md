# Nodejs Ts boilerplate

## O que foi feito

  Neste boilerplate para um back-end dockerizado utilizando modelagem de dados através do `sequelize` e`typescript`.

  Como usar template e criar repositório:

  ![GIF](/public/Untitled.gif)

<details>
  <summary><strong> :gear: Como rodar o projeto</strong></summary></br>

 Configurações mínimas para execução do projeto:

- Sistema Operacional Distribuição Unix
- Node versão 16.14.0 LTS
- Docker
- Docker-compose versão >=1.29.2

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

- `npm run docker:up` na raiz do projeto;
- `docker exec -it app_backend bash`;
- `npm run db:reset` no container do backend;

**Localmente:**

- `npm install` na raiz do projeto;
- `npm run dev`;
- `npm run db:reset`;

**Necessita ter um banco de dados(MySql) instalado localmente**

## Scripts disponíveis

Além do comando `npm run start`, há outros scripts disponíveis que podem ser úteis durante o desenvolvimento:

- `npm run dev:` Inicia o servidor local utilizando o ts-node-dev, que permite reiniciar automaticamente o servidor sempre que um arquivo é alterado.
- `npm run test:mocha:` Executa todos os testes do projeto utilizando o Mocha.
- `npm run test:coverage:` Executa os testes do projeto e gera um relatório de cobertura de código utilizando o Istanbul.
- `npm run db:reset:` Apaga todas as tabelas do banco de dados, cria novamente a estrutura do banco e popula o banco com dados iniciais.
- `npm run docker:up:` Inicia os containers Docker necessários para executar o projeto.
- `npm run docker:down:` Encerra os containers Docker utilizados pelo projeto

</details>

<details>
  <summary><strong>:memo: Dependências utilizadas</strong></summary><br />
  
- `bcrypt`
- `cors`
- `dotenv`
- `express`
- `express-async-errors`
- `jsonwebtoken`
- `mysql2`
- `sequelize`
- `zod`
- `chai`
- `chai-http`
- `eslint`
- `eslint-config-airbnb-base`
- `eslint-config-airbnb-typescript`
- `eslint-plugin-import`
- `eslint-plugin-mocha`
- `eslint-plugin-sonarjs`
- `mocha`
- `nodemon`
- `nyc`
- `sequelize-cli`
- `sinon`
- `ts-node`
- `ts-node-dev`
- `typescript`

</details>

<details>
  <summary><strong>Devs responsáveis</strong></summary>

- [@Murilo-MRS](https://github.com/Murilo-MRS)

</details>
