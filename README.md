# desafio_transacoes
Desafio de transações bancárias proposto pela Growdev

Introdução
Criar uma API REST para transações bancárias que fará o controle de valores recebidos e retirados de uma conta de um usuário. Para isso utilize node e express, juntamente com os recursos disponíveis do ES6+.
Instruções
Todas as rotas deverão possuir validação dos parâmetros recebidos, retornando uma mensagem de erro e status adequado para a situação.
Todas as rotas que possuírem consulta à alguma informação (GET, PUT, DELETE), deverão validar se o recurso acessado existe antes de efetuar a ação, retornando uma mensagem de erro e status adequado para a situação.
Os usuários deverão ser salvos em um array específico, para serem utilizados nas demais rotas.
Criar uma classe User, que deverá ter como propriedades name, cpf, email, age e transactions (sendo esse um array).
Criar uma classe Transaction, que deverá ter como propriedades title, value e type.
Ambas as classes User e Transaction deverão ter uma propriedade id, que deverá ser gerada automaticamente, sendo este um valor numérico único.
POST /users: A rota deverá receber name, cpf, email e age dentro do corpo da requisição, sendo que o cpf deve ser único por usuário. Criar uma instância da classe User com os dados recebidos, e adicionar no array de usuários.
GET /users/:id: A rota deverá retornar um único usuário de acordo com o parâmetro recebido. Não deverá retornar as transações do usuário nessa rota.
GET /users: A rota deve retornar uma listagem com todos os usuários que você cadastrou até o momento. Não deverá retornar as transações do usuário nessa rota.
PUT/DELETE /users/:id: A rota deverá editar ou deletar usuários.
POST /user/:id/transactions: A rota deverá receber title, value, type dentro do corpo da requisição, sendo type o tipo da transação, que deve ter como valor de entradas  income (depósitos) e outcome para saídas (retiradas).  Criar uma instância da classe Transaction, e adicioná-la ao usuário responsável salvo anteriormente no array de usuários.
GET /user/:id/transactions/:id: A rota deverá retornar uma única transação cadastrada previamente
GET /users/:id/transactions: A rota deverá retornar uma listagem com todas as transações que você cadastrou até o momento para um usuário específico, junto com o valor da soma de entradas, retiradas e total de crédito.
PUT/DELETE /users/:id/transactions/:id: Devem editar ou deletar transações.
