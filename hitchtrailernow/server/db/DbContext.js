import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { TrailerSchema } from '../models/Trailer';
import { MessagesSchema } from '../models/Messages';
import { MyBookedRentalsSchema } from '../models/MyBookedRentals';
import { OwnerOfTrailerSchema } from '../models/OwnerOfTrailer';
import { ProfileSchema } from '../models/Profile';
import { TrailerRenterSchema } from '../models/TrailerRenter';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profile = mongoose.model('Profile', ProfileSchema);

  Trailers = mongoose.model('Trailer', TrailerSchema);
  Messages = mongoose.model('Message', MessagesSchema);
  MyBookedRentals = mongoose.model('MyBookedRental', MyBookedRentalsSchema);

  OwnerOfTrailer = mongoose.model('OwnerOfTrailer', OwnerOfTrailerSchema);
  TrailerRenters = mongoose.model('TrailerRenter', TrailerRenterSchema);

}

export const dbContext = new DbContext()
