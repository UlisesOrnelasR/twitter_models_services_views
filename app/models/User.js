class User {
    constructor(id,name,username,bio){
        this.id = id,
        this.name = name,
        this.username = username,
        this.bio = bio,
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getdataCreated(){
        return this.dateCreated
    }
    get getlastUpdate(){
        return this.lastUpdated
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports = User