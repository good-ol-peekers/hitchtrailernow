
export class TrailerRenter{
    constructor(data){
        this.id = data.id
        this.trailerId = data.trailerId
        this.host = data.ownerOfTrailerAccountId
        this.renter = data.renterProfileId
        this.startDate = data.startDate
        this.endDate = data.endDate
        this.cost = data.cost
        this.total = data.total
        this.archived = data.archived
        this.reservationCanceled = data.reservationCanceled
    }
}