<h1 align="center">ITINERARIO: SE LIGA NA MIDIA</h1>

<div align="center">
    <img src="https://cdn.discordapp.com/attachments/863861085471244288/1092152340875841656/WhatsApp_Image_2023-04-02_at_15.06.33-PhotoRoom.png-PhotoRoom.png" alt="teste" width="200" height="200">
</div>

![slnm-version](https://img.shields.io/badge/version-v0.0.0-red.svg)

#

<p>Guia para a configuração da api do itinerario formativo</p>

<h1>Desenvolvimento: </h1>

<p>Primeiramente é preciso baixar a pasta node_modules com o seguinte comando:</p>

```shell
$ npm install
```

<p>Em seguida é necessario configurar o dotenv, siga o seguinte exemplo:</p>

```.env
DATABASE_URL= ""

JWT_SECRET = ""

NODEMAILER_USER = ""
NODEMAILER_PASS = ""

BASE_URL = ""

SEED_USER = ""
SEED_EMAIL = ""
SEED_PASSWORD = ""
```

<p>Depois de configurar o dotenv, no terminal, é necessario rodar alguns comandos do prisma. O primeiro comando é para criar as tabelas no banco de dados: </p>

```shell
$ npm run dev:migrate
```

<p>O segundo comando serve para colocar algumas informações já definidas no banco de dados: </p>

```shell
$ npm run dev:seed
```

<p>Por fim, ligue o servidor utilizando o seguindo comando: </p>

```shell
$ npm run dev
```

<br>
<br>

<h1>Testes:</h1>

Para configurar o ambiente de testes é necessario criar uma nova database com o nome `"Itinerario-Testes"`, é possível alterar o nome do banco de dados alterando o arquvio `package.json` em `scripts: {}`, segue o exemplo:

```json
"test": "set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/Itinerario-Testes?schema=public && jest --passWithNoTests",

"test:migrate": "set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/Itinerario-Testes?schema=public && npx prisma migrate dev",

"test:seed": "set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/Itinerario-Testes?schema=public && npx prisma db seed",

"test:studio": "set DATABASE_URL=postgresql://postgres:postgres@localhost:5432/Itinerario-Testes?schema=public && npx prisma studio",
```

basta substituir onde está `Itinerario-Testes`, pelo nome da sua database

<br>
<br>

O proximo passo é criar as tabelas no banco de dados de testes e preencher ela com alguns dados já definido, segue os comandos em ordem:

```shell
$ npm run test:migrate
```

```shell
$ npm run test:seed
```

após utilizar esses dois comandos, você já pode realizar os testes utilizando o seguinte comando:

```shell
$ npm run test
```

<br>
<br>

<h1>Adicionais: </h1>

É possivel fazer rodar o banco de dados no navegador durante o desenvolvimento, o proprio prisma disponibiliza esse comandol, segue dois exemplos:

```shell
$ npx prisma studio
```

```shell
$ npm run dev:studio
```

Para o ambiente de testes o comando é:

```
$ npm run test:studio
```

# Com amor: Gustavo Cardilho 💖 

<a href="https://github.com/Kyoudan" target="_blank"><img src="
https://img.shields.io/badge/-Github-0d1117?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

<a href="https://www.instagram.com/guuh_raff/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>



