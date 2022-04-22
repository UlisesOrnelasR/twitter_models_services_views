const UserService = require('./UserService')

class UserView {

    static createUser(payload){
        if(payload === null){
            console.log('Error, es null')
            return {error: 'El payload no existe.'}
        }
        else {return UserService.create(payload.id, payload.username, payload.name)
    }
}
}

module.exports = UserView