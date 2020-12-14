import express from "express";
import User from "./user";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);

let users = [];

function idCreator() {
    let id = users.length + 1;
    let index = users.find(f => f.id === id);
    while (index) {
        id += 1;
        index = users.find(f => f.id === id); 
    }
    return id;
};

//POST /users
app.post('/users', (request, response) => {
    const { name, cpf, email, age } = request.body;
    const user = new User(idCreator() , name, cpf, email, age);

    const identity = users.find(f => f.cpf === cpf);
    
    if (!identity) {
        users.push(user);
        return response.status(201).json({
            mensagem: 'Usuário registrado com sucesso'
        });
    } else {
        return response.status(400).json({
            mensagem: 'CPF já cadastrado'
        });
    }
});

//GET /users
app.get('/users', (request, response) => {
    return response.json(users);
});

//GET /users/:id
app.get('/users/:id', (request, response) => {
    const { id } = request.params;
    const user = users.find(f => f.id === parseInt(id));

    if (user) {
        return response.json(user);
    }

    return response.status(404).json({
        mensagem: 'usuário não encontrado'
    });
});

//PUT/DELETE /users/:id
app.put('/users/:id', (request, response) => {
    const { id } = request.params;
    const { name, cpf, email, age } = request.body;
    const user = users.find(f => f.id === parseInt(id));

    const identity = users.find(f => f.cpf === cpf);

    if (user) {
        if (!identity || cpf === user.cpf) {
            user.name = name;
            user.cpf = cpf;
            user.email = email;
            user.age = age;
            
            return response.status(201).json(user);
        } else {
            return response.status(400).json({
                mensagem: 'CPF já cadastrado'
            });
        }
    }

    return response.status(404).json({
        mensagem: 'usuário não encontrado'
    });   
    
});

app.delete('/users/:id', (request, response) => {
    const { id } = request.params;
    const index = (users.findIndex(f => f.id === parseInt(id)));    
    const user = users.find(f => f.id === parseInt(id));

    if (user) {
        users.splice(index, 1);

        return response.sendStatus(204).json({
        mensagem: 'Usuário removido com sucesso'
    });
    }

    return response.status(404).json({
        mensagem: 'usuário não encontrado'
    });
    
    
});

//POST /user/:id/transactions

//GET /users/:id/transactions
//GET /user/:id/transactions/:id
//PUT/DELETE /users/:id/transactions/:id


