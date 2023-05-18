import mongoose from "mongoose"

const Schema = mongoose.Schema

export const MyBookedRentalsSchema = new Schema (
{
    accountId: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
    trailerId: {type: Schema.Types.ObjectId, ref: 'Trailer', required: true},
    renterId: {type: Schema.Types.ObjectId, ref: 'Profile', required: true},
},
{ timestamps: true, toJSON: { virtuals: true } }
)
MyBookedRentalsSchema.virtual('rentalHost', {
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})
MyBookedRentalsSchema.virtual('myBookedTrailer', {
    ref: 'Trailer',
    localField: 'Trailer',
    foreignField: '_id',
    justOne: true,
})
MyBookedRentalsSchema.virtual('myTrailerRenter', {
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})