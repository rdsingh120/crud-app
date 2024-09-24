import mongoose from 'mongoose'
import Product from '../model/product.model.js'

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})
    res.status(200).json({
      success: true,
      data: allProducts,
    })
  } catch (error) {
    console.log('Error in get products: ' + error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body
  if (name && !price && !image) {
    return res.status(404).json({
      success: false,
      message: 'Please fill all the fields',
    })
  }
  try {
    const newProduct = new Product({ name, price, image })
    await newProduct.save()
    res.status(201).json({
      success: true,
      data: newProduct,
    })
  } catch (error) {
    console.log('Error in create product: ' + error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const productUpdate = req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'product not found' })
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productUpdate, {
      new: true,
    })
    res.status(200).json({
      success: true,
      message: 'product updated',
      data: updatedProduct,
    })
  } catch (error) {
    console.log('Error in update product: ' + error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'product not found' })
  }
  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message: 'product deleted',
    })
  } catch (error) {
    console.log('Error in delete product: ' + error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}
