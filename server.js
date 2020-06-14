const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const processMessage = require('./src/processMessage');

let usersOnline = [];//TODO: Alterar para adicionar o id e fazer o controle de quem está online pelo id

io.on('connection', socket => {
    socket.emit('connectionStatus', "CLIENT_CONNECTED");
    
    //Ouve a mensagem que veio dos clients
    socket.on('sendMessage', data => {
        const protocol = data.protocol;

        processMessage(data).then((processedMessage) => {

            switch(protocol){
                case "LOGIN":
                    if(processedMessage.isAuthenticated){
                        socket.emit('responseStatus', "USER_AUTHENTICATED");
                        usersOnline.push(processedMessage.username);
                    }else{
                        socket.emit('responseStatus', "USER_NOT_AUTHENTICATED");
                    }     
                    break;      
                case "REGISTER":
                    if(processedMessage){
                        socket.emit('responseStatus', "USER_REGISTERED");
                    }else{
                        socket.emit('responseStatus', "USER_NOT_REGISTERED");
                    }                    
                    break;
                case "MESSAGE":
                    console.log("Mensagem Recebida");
                    break;            
                default:
                    console.log("Não conseguiu identificar o que ocorreu");
            }
        });    
    });

    //Ouve se o usuário se desconectou
    socket.on('disconnect', () =>{
        console.log("desconectou");
    });
});

server.listen(4001);