
const UserView = require('./../../app/models/UserView')


describe('Pruebas para UserView',() => {


    test('', () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)

    })


})