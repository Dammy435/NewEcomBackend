const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            name: String,
            qty: Number,
            price: Number,
            image: String,
        }
    ],
    shippingAddress: {
        address: String,
        city: String,
        postalCode: String,
        country: String,
    },
    paymentMethod: String,
    isPaid: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    paidAt: Date,
    deliveredAt: Date,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
