import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MessagesSchema = new Schema(
  {
     creatorId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    // NOTE come back to this and find out if it needs to be an ObjectID
    parentId: {type: String, required: true},
    body: {type: String, required: true},
    createdAt: {type: Date},
    updatedAt: {type: Date},
    archived: {type: Boolean, required: true, default: false},
    deleted: {type: Boolean, required: true, default: false},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
    MessagesSchema.virtual('creator', {
        localField: 'creatorId',
        foreignField: '_id',
        justOne: true,
        ref: 'Account'
    })