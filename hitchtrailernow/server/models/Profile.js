import mongoose from "mongoose"

const Schema = mongoose.Schema

export const ProfileSchema = new Schema (
{

},
{ timestamps: true, toJSON: { virtuals: true } }
)