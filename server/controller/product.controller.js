const Product = require('../models/Product');
const ApiError = require('../utils/ApiError');
const multer = require('multer');
const { checkFileType } = require('../utils/helpers');

const upload = multer().single('productImg');

exports.createProduct = async (req, res, next) => {
  try {
    upload(req, res, async (err) => {
      const { file, body } = req;

      //check for file type
      const fileType = checkFileType(file, next, '.jpg', '.png');
      console.log(!fileType);
      if (!fileType) {
        return next(new ApiError('error file not supported', 401));
      }

      const filename = `${Date.now()}-${file.originalName}`;
      const data = {
        name: body.name,
        description: body.description,
        productImg: filename,
      };
      const product = await Product.create(data);

      res.status(201).json({
        status: 'success',
        message: product,
      });
    });
    // const product = await Product.create(req.body);

    // res.status(201).json({
    //   status: 'success',
    //   message: product,
    // });
  } catch (error) {
    next(error);
  }
};

exports.getAllProduct = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: 'success',
      result: product.length,
      message: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json({
      status: 'success',
      message: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.send('product deleted');
  } catch (error) {
    next(error);
  }
};
