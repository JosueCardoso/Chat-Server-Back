const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const processMessage = require('./processMessage');

io.on('connection', socket => {
    //TODO: Adicionar tratamento para quando o usuário se conectar(Se caiu aqui é porque se conectou)

    //Ouve a mensagem que veio dos clients
    socket.on('sendMessage', data => {
        processMessage(data);
    })

    //Ouve se o usuário se desconectou
    socket.on('disconnect', () =>{
        console.log("desconectou");
    })
});

server.listen(4001);