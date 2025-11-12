const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    price: Number,
    image: String,
    qty: Number,
    size: String,
    art: String,
    customer_name: String,
    address: String,
    contact_no: Number,
    date: {
        type: Date,
        default: Date.now
    }
})
const order = mongoose.model('order', orderSchema);

module.exports =  order ;