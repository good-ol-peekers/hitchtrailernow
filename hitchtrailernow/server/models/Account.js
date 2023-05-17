import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    coverImage: {type: String},
    createdAt: {type: String},
    bio: {type: String, default: "bio goes here"},
    address: {type: String},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

