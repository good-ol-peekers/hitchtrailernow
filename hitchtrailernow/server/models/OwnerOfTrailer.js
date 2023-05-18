import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const OwnerOfTrailerSchema = new Schema(
  {

    accountId: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
    trailerId: {type: Schema.Types.ObjectId, ref: 'Trailer', required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
OwnerOfTrailerSchema.virtual('trailerOwnerAccount',{
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})
OwnerOfTrailerSchema.virtual('ownedTrailer',{
    ref: 'Trailer',
    localField: 'trailerId',
    foreignField: '_id',
    justOne: true,
})
