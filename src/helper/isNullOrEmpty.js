const isNullOrEmpty = (string) => {       
    return new Promise((resolve)=>{
        if(string == null || string === "" || string.toString().trim() === "") 
            resolve(true);

        resolve(false);
    })        
}

module.exports = isNullOrEmpty;