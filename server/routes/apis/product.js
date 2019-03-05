var express = require('express');
var router = express.Router();

const model = require('../../models');

router.get('/get/all', (req, res) => {
	model.Product.findAll()
		.then((products) => {
			return res.send({
				success: true,
				products: products
			});
		})
		.catch((err) => {
			return res.status(500).send({
				success: false,
				error: err
			});
		});
});

module.exports = router;