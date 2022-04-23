const UserService = require('./UserService')

class UserView {

    static createUser(payload){
        if(payload === null){
            console.log('Error, es null')
            return {error: 'El payload no existe.'}
        }
         else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number'){
            return UserService.create(payload.id, payload.name, payload.username)
         }
         else {
             return { error: "Error, las propiedades del payload necesitan tener un valor valido"}
         }
}
}

module.exports = UserView