const userService = require('./userService');
const messageService = require('./messageService');

const receiveMessage = async (data) => {
    const protocol = data.protocol;

    switch(protocol){
        case "LOGIN":
            return userService.Authenticate(data);
        case "REGISTER":
            return userService.Register(data);            
        case "MESSAGE":
            return messageService.ProcessMessage(data);
            break;            
        default:
            console.log("Não conseguiu identificar o que ocorreu");
    }
};

module.exports = receiveMessage;