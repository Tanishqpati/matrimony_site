const verificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    emailVerified: { type: Boolean, default: false },
    phoneVerified: { type: Boolean, default: false },
    documents: {
      idProof: { type: String }, // URL to the ID proof document
      addressProof: { type: String }, // URL to the address proof document
    },
  }, { timestamps: true });
  
  const Verification = mongoose.model('Verification', verificationSchema);
  
  module.exports = Verification;
  