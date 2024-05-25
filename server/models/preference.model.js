const preferencesSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ageRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    heightRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    religion: { type: String, required: true },
    caste: { type: String, required: true },
    motherTongue: { type: String, required: true },
    education: { type: String, required: true },
    profession: { type: String, required: true },
    location: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    lifestyle: {
      diet: { type: String, enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan'], required: true },
      smoking: { type: Boolean, required: true },
      drinking: { type: Boolean, required: true },
    },
  }, { timestamps: true });
  
  const Preferences = mongoose.model('Preferences', preferencesSchema);
  
  module.exports = Preferences;
  