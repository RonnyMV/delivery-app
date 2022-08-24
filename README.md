# Project Delivery App

<img width=190 weight=120 src="https://camo.githubusercontent.com/3a45b69a7b9e8435d2b7dacc801e9dc515b2518190830104f77f547097363250/68747470733a2f2f692e696d6775722e636f6d2f756761577049732e706e67" width="200px" data-canonical-src="https://i.imgur.com/ugaWpIs.png" style="max-width: 100%;">

# Sobre

<p dir="auto">Aplicação full stack de uma plataforma de delivery de bebidas desenvolvida em grupo durante meus estudos na <a href="https://www.betrybe.com/" rel="nofollow">Trybe</a>.</p>

# Funcionalidades

 <ul dir="auto">
<li>
<p dir="auto">Se cadastrar na plataforma;</p>
</li>
<li>
<p dir="auto">Fazer o login na aplicação, caso já esteja cadastrado;</p>
<ul dir="auto">
<li>
<p dir="auto">É feita a autenticação local do usuário ao logar na aplicação;</p>
</li>
<li>
<p dir="auto">As credenciais sensíveis de cada usuário são criptografadas em <a href="https://www.npmjs.com/package/md5" rel="nofollow">MD5</a> ao serem lidas e salvas no banco;</p>
</li>
</ul>
</li>
<li>
<p dir="auto">Visualizar todas as bebidas disponíveis;</p>
</li>
<li>
<p dir="auto">Adicionar as bebidas desejadas no carrinho e finalizar uma compra;</p>
</li>
<li>
<p dir="auto">Acompanhar o status da compra (Pendente, Em Trânsito, Entregue);</p>
<ul dir="auto">
<li>Atualizar o status da compra de acordo com as permissões do usuário;</li>
</ul>
</li>
<li>
<p dir="auto">Caso o usuário seja um administrador, cadastrar novos usuários vendedores, visualizar e excluir usuários existentes;</p>
</li>
</ul>

# Tecnologias utilizadas

## Front-end

<li><a href="https://reactjs.org/" rel="nofollow">React</a>
<ul dir="auto">
<li><a href="https://react-hook-form.com/" rel="nofollow">React Hook Form</a></li>
<li><a href="https://react-icons.github.io/react-icons/" rel="nofollow">React Icons</a></li>
<li><a href="https://www.npmjs.com/package/react-use-cart" rel="nofollow">react-use-cart</a></li>
</ul>
</li>

## Back-end

<ul dir="auto">
<li><a href="https://www.mysql.com/" rel="nofollow">MySQL</a></li>
<li><a href="https://sequelize.org/" rel="nofollow">Sequelize</a></li>
<li><a href="https://jwt.io/introduction" rel="nofollow">JWT</a></li>
<li><a href="https://www.npmjs.com/package/md5" rel="nofollow">MD5 Hash</a></li>
<li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a>
<ul dir="auto">
<li><a href="https://expressjs.com/pt-br/" rel="nofollow">Express</a></li>
<li><a href="https://www.npmjs.com/package/http-status-codes" rel="nofollow">HTTP-Status-Codes</a></li>
</ul>
</li>
</ul>

# Equipe

<p dir="auto">No desenvolvimento do projeto, tivemos uma abordagem ágil e realizamos a divisão do grupo em duas equipes, uma para o front-end e outra para o back-end, a plataforma do <a href="https://trello.com/" rel="nofollow">Trello</a> também foi utilizada a fim de organizar as tarefas. Além disso, foi definido um horário fixo para a realização de reuniões diárias a fim de discutir sobre o andamento do projeto.</p>


<table align="center">
 <tbody><tr>
  <th align="center" colspan="2">Front-End</th>
  <th align="center" colspan="3">Back-End</th>
 </tr>
 <tr>
  <td align="center" width="180">
   <a href="https://github.com/MiguelNS101">
   <img align="center" alt="Miguel Santana" height="100" width="100" src="https://avatars.githubusercontent.com/u/20672916?v=4" style="max-width: 100%;">
   <br>Miguel Santana
   </a>
  </td> 
  <td align="center" width="180"> 
   <a href="https://github.com/yangwom">
   <img align="center" alt="Yang Vieira" height="100" width="100" src="https://avatars.githubusercontent.com/u/90363090?v=4" style="max-width: 100%;">
   <br>Yang Vieira
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/marllomartin">
   <img align="center" alt="Marllon Martins" height="100" width="100" src="https://avatars.githubusercontent.com/u/89039470?v=4" style="max-width: 100%;">
   <br>Marllon Martins
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/giovannaeliz">
   <img align="center" alt="Giovanna Eliz" height="100" width="100" src="https://avatars.githubusercontent.com/u/78395214?v=4" style="max-width: 100%;">
   <br>Giovanna Eliz
   </a>
  </td>
  <td align="center" width="180">   
   <a href="https://github.com/RonnyMV">
   <img align="center" alt="Ronny Velárdez" height="100" width="100" src="https://avatars.githubusercontent.com/u/88902323?v=4" style="max-width: 100%;">
   <br>Ronny Velárdez
   </a>
  </td>
 </tr>
</tbody></table>

# Rodando o projeto localmente

<p dir="auto">Esse projeto utiliza variáveis de ambiente. Renomeie o arquivo <code>.env.example</code> para <code>.env</code> e altere os valores de acordo com suas próprias configurações.</p>

## Clonando o projeto

<pre class="notranslate"><code>git clone git@github.com:RonnyMV/delivery-app.git

cd delivery-app

cd app
</code></pre>

## Instalando as dependências do Front-End

<pre class="notranslate"><code>cd frontend

npm install
</code></pre>

## Instalando as depenências do Back-End

<pre class="notranslate"><code>cd ..

cd backend

npm install
</code></pre>

## Inicializando o Banco de Dados com Sequelize:

<pre class="notranslate"><code>npm run db:reset
</code></pre>

## Inicializando o Back-End do projeto:
Na pasta backend:
<pre class="notranslate"><code>npm run dev
</code></pre>

## Inicializando o Front-End do projeto:
Na pasta frontend

<pre class="notranslate"><code>npm start
</code></pre>

##### Referências
Créditos para <a href="https://github.com/marllomartin">Marllon Martins</a> que elaborou este readme
