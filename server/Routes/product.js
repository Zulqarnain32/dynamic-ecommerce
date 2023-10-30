const express = require('express')
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ProductModel = require('../model/ProductSchema')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the directory where uploaded files will be stored
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        cb(null, Date.now() + extname); // Rename the file with a timestamp to avoid name conflicts
    }
});


//second step is to read created data
router.get('/products', async(req,res) => {
    ProductModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

const upload = multer({ dest: 'uploads/' });

router.post('/add-products', upload.single('file'), async (req, res) => {
    try {
        const { title, postData } = req.body;

        if (!title || !postData || !req.file) {
            return res.json({ message: "Fill form and upload a file" });
        }

        const originalFilename = req.file.originalname; 
        const imageExtension = originalFilename.substring(originalFilename.lastIndexOf('.')); 
        const newFilename = 'img' + originalFilename;

        fs.renameSync(req.file.path, 'uploads/' + newFilename);

        const post = {
            title,
            postData,
            image: newFilename 
        };

        const result = await ProductModel.create(post);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});



module.exports = router;