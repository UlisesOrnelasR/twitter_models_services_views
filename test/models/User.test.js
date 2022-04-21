const User = require('./../../app/models/User')

describe('Prueba de jest', () => {
    test('Prueba1', () => {
        const user = new User(12,'UlisesOrnelas','UlisO','Bio','dataCreated','lastUpdated')
        expect(user.id).toBe(12)
    })
})