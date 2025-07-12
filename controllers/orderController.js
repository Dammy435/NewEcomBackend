const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
        return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
        user: req.user.id, // will work with auth middleware
        orderItems,
        shippingAddress,
        paymentMethod,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
};

exports.getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id }).populate("orderItems.product");
    res.json(orders);
};
