import { Trailer } from "./Trailer.js"

export class OwnerOfTrailer extends Trailer {
    constructor(data){
        this.id = data.id
        this.trailerId = data.trailerId
        this.accountId = data.accountId
    }
}