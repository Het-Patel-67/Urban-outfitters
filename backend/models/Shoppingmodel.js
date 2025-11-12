const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    price: Number,
    image: String,
    size: String,
    art: String
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports =  Cart ;