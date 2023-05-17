import { Messages } from "./Messages.js";

export class TrailerRenter extends Messages{
    constructor(data){
        this.id = data.id
        this.trailerId = data.trailerId
        this.host = data.ownerOfTrailerId
        this.renter = data.profileId
        this.startDate = data.startDate
        this.endDate = data.endDate
        this.cost = data.cost
        this.total = data.total
    }
}