const User = require('./../../app/models/User')

describe('Test para User', () => {
    test('Creación de user', () => {
        const user = new User(12,'UlisesOrnelas','UlisO','Bio','dataCreated','lastUpdated')
        expect(user.id).toBe(12)
    })
})