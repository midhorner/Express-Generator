const mongoose = require("mongoose"); // import mongoose
const Schema = mongoose.Schema; // makes short hand to mongoose.Schema function

const partnerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
