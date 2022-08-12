const Product = require('../models/product.models');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json( allDaProducts ))
        .catch(err => res.json({ message: 'Error finding all Products', error: err }));
}

module.exports.findOneSingleProduct = (req, res) => {
    console.log(req.params.id)
    Product.find({_id: req.params.id})
        .then(oneSingleProduct => res.json(oneSingleProduct ))
        .catch(err => res.json({ message: 'Error finding one Product', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json(newlyCreatedProduct ))
        .catch(err => res.json({ message: 'Error adding Product', error: err }));
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json( updatedProduct ))
        .catch(err => res.json({ message: 'Error updating Product', error: err }));
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id} )
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Error deleting Product', error: err }));
}