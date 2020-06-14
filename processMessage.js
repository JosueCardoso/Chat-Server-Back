const receiveMessage = (data) => {
    const protocol = data.protocol;

    switch(protocol){
        case "LOGIN":
            console.log("Logar");
            break;
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