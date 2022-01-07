const express = require('express');
const router = express.Router();
const HomeController=require('../app/controllers/HomeController');
const Verify= require('../app/middlewares/Verify')

router.get('/',Verify,HomeController.home);

module.exports =router;