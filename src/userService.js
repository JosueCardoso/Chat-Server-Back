const userDAO = require('./userDAO');
const isNullOrEmpty = require('./helper/isNullOrEmpty');

const userService = {    
    async Authenticate (data) {   
        const username = data.username;
        const password = data.password;
    
        let responseObject = {
            isAuthenticated: false,
            user: {},

        };    
        
        if(await isNullOrEmpty(username) || await isNullOrEmpty(password))
            return responseObject;  

        const userAuthenticated = await userDAO.FindUserByUsernameAndPassword(username, password);

        if(userAuthenticated == null)
            return responseObject;
    
        responseObject.isAuthenticated = true;
        responseObject.user = {
            id: userAuthenticated.id,
            username: userAuthenticated.username
        };
        
        return responseObject; 
    },
    async Register (data){
        const username = data.username;
        const password = data.password;
        const email = data.email;
        
        if(await isNullOrEmpty(username) || await isNullOrEmpty(password) || await isNullOrEmpty(email))
            return false;  

        return await userDAO.InsertUser(username, password, email);
    }
}

module.exports = userService;