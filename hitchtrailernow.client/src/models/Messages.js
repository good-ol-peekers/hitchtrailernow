import { Profile } from "./Profile.js"

export class Messages extends Profile {
    constructor(data){
        this.id = data.id
        this.body = data.body
        this.createdAt = data.createdAt || new Date().toLocaleTimeString('en-US')
        this.archived = data.archived
        this.ProfileId = data.ProfileId
    }
}