const User = require('./../../app/models/User')

describe('Test para User', () => {
    test('Creación de user', () => {
        const user = new User(12,'UlisesOrnelas','@UlisO','Bio')
        expect(user.id).toBe(12)
    })
    test('Fechas en atributo de User', () => {
        const user = new User(54,'Erika Machain','@erimach05','Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.dateCreated).not.toBeUndefined()
    })
})