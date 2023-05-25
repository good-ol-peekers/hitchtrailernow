
export class Profile {
    constructor(data){
        this.id = data.id
        this.profileImg = data.profileImg
        this.bio = data.bio
        this.createdAt = data.createdAt || new Date().toLocaleTimeString('en-US')
        this.location = data.location
        this.rating = data.rating

    }
}