const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
      name: { type: String, required: true}, 
      price: { type: Number, required: true },
      inventory: { type: Number, required: true},
      nextDelivery: {type: Date, required: true},
      deliveryAmt: {type:Number, required: true}
    },
  );

const TheItems = mongoose.model('items', itemSchema);

module.exports = TheItems;