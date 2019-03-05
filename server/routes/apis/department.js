var express = require('express');
var router = express.Router();

const model = require('../../models');

router.get('/get/all', (req, res) => {
	model.Department.findAll()
		.then((departments) => {
			return res.send({
				success: true,
				departments: departments
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