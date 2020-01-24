const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId: {
      type: String,
      required: [true, 'Please add a store ID'],
      unique: true,
      trim: true,
      maxlength: [10, 'Store ID must e less than 10 chars']
  },
  location: {
    type: {
       type: String,]
       enum: ['Point'], 
       
    },
    coordinates: {
       type: [Number],
       index: '2dsphere'
    },
    formattedAddress: String
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Store', StoreSchema);