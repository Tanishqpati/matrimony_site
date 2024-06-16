const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  dateOfBirth: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  profilePicture: { type: String }, // URL to the profile picture
  maritalStatus: { type: String, required: true, enum: ['Never Married', 'Divorced', 'Widowed', 'Other'] },
  height: { type: Number, required: true }, // in cm
  weight: { type: Number, required: true }, // in kg
  religion: { type: String, required: true },
  caste: { type: String, required: true },
  gotra: { type: String },
  motherTongue: { type: String, required: true },
  education: { type: String, required: true },
  profession: { type: String, required: true },
  annualIncome: { type: Number, required: true },
  currentResidence: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  familyDetails: {
    familyType: { type: String, enum: ['Joint', 'Nuclear'], required: true },
    parentsOccupation: { type: String, required: true },
    siblings: {
      brothers: { type: Number, required: true },
      sisters: { type: Number, required: true },
      marriedBrothers: { type: Number, required: true },
      marriedSisters: { type: Number, required: true },
    },
  },
  aboutMe: { type: String, required: true },
  horoscope: {
    timeOfBirth: { type: String },
    placeOfBirth: { type: String },
  },
  lifestyle: {
    diet: { type: String, enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'], required: true },
    smoking: { type: Boolean, required: true },
    drinking: { type: Boolean, required: true },
  },
  // preferences: {
  //   ageRange: {
  //     min: { type: Number, required: true },
  //     max: { type: Number, required: true },
  //   },
  //   heightRange: {
  //     min: { type: Number, required: true },
  //     max: { type: Number, required: true },
  //   },
  //   religion: { type: String, required: true },
  //   caste: { type: String, required: true },
  //   motherTongue: { type: String, required: true },
  //   education: { type: String, required: true },
  //   profession: { type: String, required: true },
  //   location: {
  //     city: { type: String },
  //     state: { type: String },
  //     country: { type: String },
  //   },
  //   lifestyle: {
  //     diet: { type: String, enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'], required: true },
  //     smoking: { type: Boolean, required: true },
  //     drinking: { type: Boolean, required: true },
  //   },
  // },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
