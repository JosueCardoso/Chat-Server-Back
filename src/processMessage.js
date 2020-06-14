const userService = require('./userService');

const receiveMessage = async (data) => {
    const protocol = data.protocol;

    switch(protocol){
        case "LOGIN":
            return userService.Authenticate(data);
        case "REGISTER":
            console.log("Registrar");
            break;
        case "MESSAGE":
            console.log("Mensagem Recebida");
            break;            
        default:
            console.log("Não conseguiu identificar o que ocorreu");
    }
};

module.exports = receiveMessage;