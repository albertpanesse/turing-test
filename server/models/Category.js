function Category(sequelize, DataTypes) {

	var Category = sequelize.define('Category', {
		category_id: {
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
		tableName: 'category',
		getterMethods: {},
	});

	Category.associate = (models) => {
		Category.belongsTo(models.Department, {
			foreignKey: 'department_id', 
			constraints: false
		});
	};

	return Category;
};

module.exports = Category;
