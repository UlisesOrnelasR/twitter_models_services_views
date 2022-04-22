
const UserView = require('./../../app/models/UserView')


describe('Pruebas para UserView',() => {


    test('Requerimiento 1: damos valor de "null" en el payload y devuelve "error"',() => {
        const payload = null //asignando valor null a payload
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)

    })


})