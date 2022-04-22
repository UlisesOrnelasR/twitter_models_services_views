const User = require('./User')

class UserService {

    static create(id, name, username){
        return new User(id, name, username, 'sin bio')
    }
    static getInfo(user){
        return Object.values(user)
    }
       

}

module.exports = UserService