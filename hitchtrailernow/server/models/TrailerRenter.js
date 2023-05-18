import mongoose from "mongoose"

const Schema = mongoose.Schema

export const TrailerRenterSchema = new Schema (
{
renterProfileId: { type: Schema.Types.ObjectId, ref: 'Profile'},
ownerOfTrailerAccountId: { type: Schema.Types.ObjectId, ref: 'Account'},
trailerId: { type: Schema.Types.ObjectId, ref: 'Trailer'},
startDate: {type: Date, required: true, minLength: 1, maxLength:5000},
endDate: {type: Date, required: true, minLength: 1, maxLength:5000},
totalCost: {type: String, minLength: 1, maxLength: 10000, required: true, default: "daily rate goes here"},
},
{ timestamps: true, toJSON: { virtuals: true } }
)

TrailerRenterSchema.virtual('trailer',{
    ref: 'Trailer',
    localField: 'trailerId',
    foreignField: '_id',
    justOne: true,
})
TrailerRenterSchema.virtual('trailerRenterProfile', {
    ref: 'Profile',
    localField: 'renterProfileId',
    foreignField: '_id',
    justOne: true,
})
TrailerRenterSchema.virtual('trailerHost', {
    ref: 'Account',
    localField: 'ownerOfTrailerAccountId',
    foreignField: '_id',
    justOne: true,
})