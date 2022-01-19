const mongoose = require("mongoose");
//add comment to repush on correct branch
const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  birthdate: { type: Date },
  email: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  description: { type: String },
  availability: {
    type: Map,
    of: new Schema({
        startDate: { type: Date },
        endDate: { type: Date },
        availableTimes: [{ startTime: { type: String }, endTime: { type: String}}]
    })
  },
  profilePhoto: { type: String },
  paymentOptions: { type: [String] },
  userID: {
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  hourlyRate: { type: Number }
});

module.exports = Profile = mongoose.model("profile", profileSchema);
