const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
};

exports.createProduct = async (req, res) => {
    const { name, brand, description, price, countInStock, image, category } = req.body;

    const product = new Product({
        name,
        brand,
        description,
        price,
        countInStock,
        image,
        category,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
};
