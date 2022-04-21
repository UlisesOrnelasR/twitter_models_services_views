class User {
    constructor(id,username,name,bio){
        this.id = id,
        this.username = username,
        this.bio = bio,
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
}

module.exports = User