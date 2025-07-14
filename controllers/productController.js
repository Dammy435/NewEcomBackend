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
//  Later: Implement update and delete functionality with proper admin checks
exports.updateProduct = async (req, res) => {
    const { name, brand, description, price, countInStock, image, category } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.name = name || product.name;
    product.brand = brand || product.brand;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.image = image || product.image;
    product.category = category || product.category;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
}
exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.remove();
    res.json({ message: "Product removed" });
}