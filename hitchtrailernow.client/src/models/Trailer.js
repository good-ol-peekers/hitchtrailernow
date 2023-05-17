import { TrailerRenter } from "./TrailerRenter.js"

 export class Trailer extends TrailerRenter{
    constructor(data){
        this.id = data.id
        this.accountId = data.accountId
        this.archived = data.archived
        this.description = data.description
        this.details = data.details
        this.features = data.features
        this.capacity = data.capacity
        this.title = data.title
        this.type = data.type
        this.addons = data.addons
        this.deposit = data.deposit
        this.cost = data.cost
        this.img1 = data.img1
        this.img2 = data.img2
        this.img3 = data.img3
        this.img4 = data.img4
        this.img5 = data.img5
        this.img6 = data.img6
    }
}