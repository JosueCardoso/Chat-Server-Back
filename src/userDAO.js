const fakeUser = {
    username: "Josue",
    password: "1234"
}

let fakeRepository = [fakeUser];

const userDAO = {
    FindUserByUsernameAndPassword (username, password){   
        return new Promise( (resolve) => {
            resolve(fakeRepository.find(user => user.username === username && user.password === password));
        });        
    },
    InsertUser(username, password, email){
        
    }
}

module.exports = userDAO;