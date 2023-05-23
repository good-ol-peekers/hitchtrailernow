import mongoose from "mongoose"

const Schema = mongoose.Schema

export const TrailerSchema = new Schema (
{
    archived: {type: Boolean, required: true, default: false},
    title: {type: String, minLength:3, maxLength: 10000, required: true, default: "title goes here"},
    year: {type: String, minLength:3, maxLength: 10000, required: true},
    make: {type: String, minLength:3, maxLength: 10000, required: true},
    capacity: {type: String, minLength:3, maxLength: 10000, required: true},
    lengthSize: {type: String, minLength:3, maxLength: 10000, required: true},
    width: {type: String, minLength:3, maxLength: 10000, required: true},
    description: {type: String, minLength:3, maxLength: 10000, default: "description goes here"},
    details: {type: String, minLength:3, maxLength: 10000, default: "details go here"},
    rules: {type: String, minLength:3, maxLength: 10000, default: "rules go here"},
    cost: {type: String, minLength:3, maxLength: 10000, default: "daily rate goes here"},
    addons: {type: String, minLength:3, maxLength: 10000, default: "addons goes here"},
    deposit: {type: String, minLength:3, maxLength: 10000, default: "deposit goes here"},
    type: {type: String, required: true, enum:['utility', 'flatbed', 'car', 'car dolly', 'dump', 'enclosed', 'horse trailer', 'motorcycle trailer', 'hitch cargo carrier'] },
img1: {type: String, minLength:3, maxLength: 15000},
img2: {type: String, minLength:3, maxLength: 15000},
img3: {type: String, minLength:3, maxLength: 15000},
img4: {type: String, minLength:3, maxLength: 15000},
img5: {type: String, minLength:3, maxLength: 15000},
img6: {type: String, minLength:3, maxLength: 15000},
img7: {type: String, minLength:3, maxLength: 15000},
accountId: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
},
{ timestamps: true, toJSON: { virtuals: true } }
)

TrailerSchema.virtual('trailerOwner',{
    ref: 'Account',
    localField: 'accountId',
    foreignField: '_id',
    justOne: true,
})
