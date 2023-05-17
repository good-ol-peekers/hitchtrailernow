import mongoose from "mongoose"

const Schema = mongoose.Schema

export const TrailerSchema = new Schema (
{
    title: {type: String, minLength:3, maxLength: 10000},
    year: {type: String, minLength:3, maxLength: 10000},
    make: {type: String, minLength:3, maxLength: 10000},
    capacity: {type: String, minLength:3, maxLength: 10000},
    length: {type: String, minLength:3, maxLength: 10000},
    width: {type: String, minLength:3, maxLength: 10000},
    details: {type: String, minLength:3, maxLength: 10000},
    rules: {type: String, minLength:3, maxLength: 10000},
    cost: {type: String, minLength:3, maxLength: 10000},
    addons: {type: String, minLength:3, maxLength: 10000},
    deposit: {type: String, minLength:3, maxLength: 10000},
    type: {type: String, required: true, enum:['utility', 'flatbed', 'car', 'car dolly', 'dump', 'enclosed', 'horse trailer', 'motorcycle trailer', 'cargo carrier'] },
img1: {type: String, minLength:3, maxLength: 15000},
img2: {type: String, minLength:3, maxLength: 15000},
img3: {type: String, minLength:3, maxLength: 15000},
img4: {type: String, minLength:3, maxLength: 15000},
img5: {type: String, minLength:3, maxLength: 15000},
img6: {type: String, minLength:3, maxLength: 15000},
img7: {type: String, minLength:3, maxLength: 15000},
},
{ timestamps: true, toJSON: { virtuals: true } }
)