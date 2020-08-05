const fakeUser = {
    username: "Josue",
    password: "1234",
    email: "josuecardoso@printwayy.com"
}

const fakeUser2 = {
    username: "admin",
    password: "admin",
    email: "admin@admin.com"
}

let fakeRepository = [fakeUser, fakeUser2];

const userDAO = {
    FindUserByUsernameAndPassword (username, password){   
        return new Promise( (resolve) => {
            resolve(fakeRepository.find(user => user.username === username && user.password === password));
        });        
    },
    InsertUser(username, password, email){
        return new Promise( (resolve) => {  
            const userAlreadyRegistered = fakeRepository.find(user => user.username === username && user.email === email) != null;
            
            if(userAlreadyRegistered)
                resolve(false);            

            fakeRepository.push({
                username: username,
                password: password,
                email: email
            })

            resolve(true);
        })        
    }
}

module.exports = userDAO;