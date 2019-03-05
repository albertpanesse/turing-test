function Product(sequelize, DataTypes) {

    var Product = sequelize.define('Product', {
        product_id: {
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
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        discounted_price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        display: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            defaultValue: 0
        }
    }, 
    {
        timestamps: false,
        tableName: 'product',
        getterMethods: {},
    });

    return Product;
};

module.exports = Product;
