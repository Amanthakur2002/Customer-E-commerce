const express = require('express');
const productsRouter = express.Router();
const { getProducts } = require('../../controller/products/Products');



productsRouter.get('/getProducts', getProducts)

module.exports=productsRouter;
