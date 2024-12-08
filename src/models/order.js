
const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = new mongoose.Schema({
    configuration: {
        inside: { type: String, required: true },
        mat_laces: { type: String, required: true },
        mat_outside_1: { type: String, required: true },
        mat_outside_2: { type: String, required: true },
        mat_outside_3: { type: String, required: true },
    },
    customer: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true, match: /.+@.+..+/ },
    },
    price: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

// Create and export the Order model
module.exports = mongoose.model('Order', orderSchema);
