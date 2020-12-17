const multer = require('multer');
const User = require('../models/User');
const { fileUploadStream, checkFileType } = require('../utils/helpers');

const upload = multer().single('profileImg');

/**this is to upload profile image */
exports.uploadProfileImage = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) next(err);

    const { file, body } = req;

    /**validate file */
    if (
      file.detectedFileExtension !== '.jpg' &&
      file.detectedFileExtension !== '.png'
    ) {
      return next(
        new Error('invalid file type only jpg and png file supported')
      );
    }
    // const a = checkFileType(file, next, '.jpg', '.png');
    // console.log(a);
    // // if (!checkFileType) {
    // //   next(new Error('error'));
    // // }
    const filename = `${Date.now()}-${file.originalName}`;

    const uploadFile = await fileUploadStream(file, `./uploads/${filename}`);
    const user = await User.findByIdAndUpdate(
      { _id: req.user._id },
      { profileImg: filename },
      { new: true }
    );
    res.status(201).json({
      status: 'success',
      message: user,
    });
  });
};

exports.updateProfile = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json({
      status: 'success',
      message: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = () => (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: req.user,
  });
};

exports.deletUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res.status.json({
      status: 'success',
      message: 'user deleted',
    });
  } catch (error) {
    next(error);
  }
};
