const User = require('./../../app/models/User')

describe('Test para User', () => {
    test('Requerimiento 1: Creación de user', () => {
        const user = new User(12,'UlisesOrnelas','@UlisO','Bio')
        expect(user.id).toBe(12)
    })
    test('Requerimiento 2: Fechas en atributo de User', () => {
        const user = new User(54,'Erika Machain','@erimach05','Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.dateCreated).not.toBeUndefined()
    })
    test('Requerimiento 3: Agregando getters a objetos de la clase User',() => {
        const user = new User(54,'Erika Machain','@erimach05','Bio')

        expect(user.getUsername).toBe('@erimach05')
        expect(user.getBio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.getlastUpdate).not.toBeUndefined()
    })
    test('Requerimiento 4: Agregando Setters', () => {
        const user = new User(54,'Erika Machain','@erimach05','Bio')

        user.setUsername = 'Kimberly M'
        user.setBio = 'NuevaBio'

        expect(user.username).toBe('Kimberly M')
        expect(user.bio).toBe('NuevaBio')
        
    })
})