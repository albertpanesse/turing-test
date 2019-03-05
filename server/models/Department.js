function Department(sequelize, DataTypes) {

	var Department = sequelize.define('Department', {
		department_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		timestamps: false,
		tableName: 'department',
		getterMethods: {},
	});

	return Department;
};

module.exports = Department;
