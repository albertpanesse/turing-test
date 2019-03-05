var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const departmentRouter = require('./department');
const categoryRouter = require('./category');
const productRouter = require('./product');

router.use(function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');

	next();
});

router.use('/auth', authRouter);
router.use('/department', departmentRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;
