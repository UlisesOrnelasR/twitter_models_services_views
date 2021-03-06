const User = require('./User')

class UserService {

    static create(id, name, username){
        return new User(id, name, username, 'sin bio')
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUsername(user,username){
        user.setUsername = username
    }
    static getAllUsernames(users){
        const UserUsernames = users.map(user => user.username)
        return UserUsernames
    }

}

module.exports = UserService