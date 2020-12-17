const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product.controller');

const router = require('express').Router();

router.get('/', getAllProduct);
router.post('/create', createProduct);
router.patch('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
module.exports = router;
