const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Product name must be longer than 2 characters!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "Product description must be longer than 10 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0.01, "Product must have a positive price!"]
    }

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;