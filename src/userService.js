const userDAO = require('./userDAO');
const isNullOrEmpty = require('./helper/isNullOrEmpty');

const userService = {
    async Authenticate (data) {   
        const username = data.username;
        const password = data.password;
    
        let responseObject = {
            isAuthenticated: false,
            username: ""
        };    
        
        if(await isNullOrEmpty(username) || await isNullOrEmpty(password))
            return responseObject;  

        const userAuthenticated = await userDAO.FindUserByUsernameAndPassword(username, password);

        if(userAuthenticated == null)
            return responseObject;
    
        responseObject.isAuthenticated = true;
        responseObject.username = username;
    
        return responseObject; 
    }
}

module.exports = userService;