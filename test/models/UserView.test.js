
const UserView = require('./../../app/models/UserView')


describe('Pruebas para UserView',() => {

    // 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('Requerimiento 1: damos valor de "null" en el payload y devuelve "error"',() => {
        const payload = null //asignando valor null a payload
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
    // 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. 
    // Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    test('Requerimiento 2:',() => {
        const payload = {username: null, name: 12, id: 'id'}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })
    // 3. Valida que un `payload` con algunas de las propiedades 
    // necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
    test('Requerimiento 3:', () => {
        const payload = {username: 'Username'}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

})