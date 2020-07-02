const isNullOrEmpty = require('./helper/isNullOrEmpty');

const messageService = {
    async ProcessMessage(data){
        const username = data.username;
        const message = data.message;
        let response = {
            isValid: false,            
            message: {
                username: '',
                text: '',
            }
        }

        if(await isNullOrEmpty(username) || await isNullOrEmpty(message))
            return response;

        response.isValid = true;
        response.message.username = username;
        response.message.text = message;

        return response;
    }
}

module.exports = messageService;