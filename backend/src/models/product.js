"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class product extends Model {
		static associate({basket_product, shop, shop_product, category, product_info}) {
			this.belongsToMany(shop, {through: shop_product});
			this.hasMany(basket_product);
			this.belongsTo(category);
			this.hasOne(product_info);
		}
	}

	product.init({
		slug: STRING,
		name: STRING,
		price: INTEGER,
	}, {
		sequelize,
		modelName: "product",
		timestamps: false,
	});
	return product;
};