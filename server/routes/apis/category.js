var express = require('express');
var router = express.Router();

const model = require('../../models');

router.get('/get/byDepartment/:department_id', (req, res) => {
	const department_id = req.params.department_id;

	model.Category.findAll({
		where: {
			department_id: department_id
		},
		include: [
			{model: model.Department}
		]
	})
		.then((categories) => {
			return res.send({
				success: true,
				categories: categories
			});
		})
		.catch((err) => {
			console.log(err);

			return res.status(500).send({
				success: false,
				error: err
			});
		});
});

module.exports = router;