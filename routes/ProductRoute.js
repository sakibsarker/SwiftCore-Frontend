const express = require('express');
const router = express.Router();

const {getAllproducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controller/ProductController');


const {protect,admin}=require('../middleware/authMiddleware');

router.route('/').get(protect,getAllproducts).post(protect,createProduct);
router.route('/:id').get(getSingleProduct)
.put(protect,admin,updateProduct)
.delete(protect,admin,deleteProduct);


module.exports = router;

