import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access public
router.get('/', asyncHandler(async (request, response) => {
  const products = await Product.find({});

  response.json(products);
}))

// @desc Fetch single product
// @route GET /api/products/:id
// @access public
router.get('/:id', asyncHandler(async(request, response) => {
  const product = await Product.findById(request.params.id)

  if(product) {
    response.json(product);
  } else {
    response.status(404).json({ message: 'Product not found'});
  }

}))

export default router
