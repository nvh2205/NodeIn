const express = require('express');
const router = express.Router();

const {validator}= require('../app/validator/Validator')


const authController = require('../app/controllers/AuthController')

router.get('/',authController.showPage);
router.post('/',validator.ValidatorLogin(),authController.login);


module.exports =router;