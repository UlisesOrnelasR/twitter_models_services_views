class User {
    constructor(id,username,name,bio){
        this.id = id,
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
}

module.exports = User