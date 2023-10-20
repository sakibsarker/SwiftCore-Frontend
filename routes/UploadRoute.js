const express = require('express');
const router = express.Router();


const {
    Upload,
    FetchImageList
} = require('../controller/UploadController');

const {protect,admin}=require('../middleware/authMiddleware');


router.post('/',Upload)
router.get('/',FetchImageList)



module.exports = router;