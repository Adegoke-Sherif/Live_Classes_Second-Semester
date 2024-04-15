import mongoose from "mongoose";

const walletSchema = mongoose.Schema({
  user: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User", 
   required: true,
  },
  balance: {
    type: Number, 
    default: 0,
    required: true,
   },
   createdAt: {
    type: Date,
    default: Date.now,
   },
});

const wallet = mongoose.model("Wallet", walletSchema);

export default wallet;