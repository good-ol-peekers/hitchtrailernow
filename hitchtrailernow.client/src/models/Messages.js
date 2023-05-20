import { Profile } from "./Profile.js"

export class Messages extends Profile {
    constructor(data){
        this.id = data.id
        this.creatorId = data.creatorId
        this.parentId = data.parentId
        this.body = data.body
        this.createdAt = data.createdAt || new Date().toLocaleTimeString('en-US')
        this.updatedAt = data.updatedAt || new Date().toLocaleTimeString('en-US')
        this.archived = data.archived
        this.deleted = data.deleted
        this.creator = data.creator
    }
}