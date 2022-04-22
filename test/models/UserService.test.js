const UserService = require('./../../app/models/UserService')

describe('Test para clase UserService',() =>{

    test('Requerimiento 1: usando static method',() => {
        const user = UserService.create(15,'AngelesE','@FannyO')
        expect(user.id).toBe(15)
        expect(user.username).toBe('@FannyO')
        expect(user.name).toBe('AngelesE')
        expect(user.bio).not.toBeUndefined()
    })
    
    //Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un 
    //objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
    test('Requerimiento 2:',() => {
        const user = UserService.create(15,'AngelesE','@FannyO')
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(15)
        expect(userInfoList[1]).toBe('AngelesE')
        expect(userInfoList[2]).toBe('@FannyO')
        expect(userInfoList[3]).toBe('sin bio')
    })

    // Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`,
    // que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 
    test('Requerimiento 3: updateUserUsername', () => {
        const user = UserService.create(15,'AngelesE','@FannyO')
        UserService.updateUserUsername(user, '@AngelesE')
        expect(user.username).toBe('@AngelesE')
    })
})