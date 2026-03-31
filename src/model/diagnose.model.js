import mongoose from "mongoose";

const diagnoseSchema = new mongoose.Schema({
  symptoms: {
    type: String,
    required: true
  },
  diagnosis: [
    {
      name: String,
      probability: String,
      next_steps: String
    }
  ]
}, { timestamps: true });

export const Diagnose = mongoose.model("Diagnose", diagnoseSchema);