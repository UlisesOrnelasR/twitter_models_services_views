const UserService = require('./../../app/models/UserService')

describe('Test para clase UserService',() =>{

    test('Requerimiento 1: usando static method',() => {
        const user = UserService.create(15,'AngelesE','@FannyO')
        expect(user.id).toBe(15)
        expect(user.username).toBe('AngelesE')
        expect(user.name).toBe('@FannyO')
        expect(user.bio).not.toBeUndefined()
    })

})