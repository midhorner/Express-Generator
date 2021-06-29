const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // makes short hand to mongoose.Schema function

require('mongoose-currency').loadType(mongoose); // enables new currency type for use in mongoose schemas
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
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
  cost: {
    type: Currency,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
