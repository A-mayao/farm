const express = require('express');
const router = express.Router();
const controller = require('../containernode/form.js');
router.get('/',controller.home)
router.get('/model1', controller.mod1);
router.post('/model1', controller.formprocess);
router.get('/model2',controller.model2)
router.get('/model3',controller.model3)

module.exports = router