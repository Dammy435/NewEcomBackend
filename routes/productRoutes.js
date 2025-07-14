const express = require("express");
const {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct

} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct); // Later: Protect this for admin use
router.put("/:id", updateProduct); // Later: Protect this for admin use
router.delete("/:id", deleteProduct); // Later: Protect this for admin use

module.exports = router;
