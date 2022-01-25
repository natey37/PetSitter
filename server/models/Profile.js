const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { 
    type: String, 
    enum: {
        values: ['male', 'female', 'non-binary', 'other', 'prefer not to answer'],
        message: 'I\'m sorry, that is not a valid option'
    }, 
    lowercase: true
  },
  birthDate: { type: Date },
  phoneNumber: { type: String },
  address: { type: String },
  description: { type: String },
  availability: {
    type: Map,
    of: new mongoose.Schema({
      startDate: { type: Date },
      endDate: { type: Date },
      availableTimes: [{ startTime: { type: String }, endTime: { type: String}}]
    })
  },
  profilePhoto: { type: String },
  paymentOptions: { type: [String] },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
  },
  hourlyRate: { type: Number }
});

module.exports = Profile = mongoose.model("Profile", profileSchema);
