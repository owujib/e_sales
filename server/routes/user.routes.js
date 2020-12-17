const express = require('express');
const bcrypt = require('bcryptjs');
const {
  register,
  login,
  Authorization,
} = require('../controller/auth.controller');

const {
  uploadProfileImage,
  getProfile,
  updateProfile,
  deletUser,
} = require('../controller/user.controller');
const router = express.Router();

//register route
router.post('/register', register);

router.post('/login', login);

router.use(Authorization);

router.patch('/upload/profile', uploadProfileImage);

router.get('/profile', getProfile);
router.patch('/update/:id', updateProfile);
router.delete('/delete/:id', deletUser);
module.exports = router;
