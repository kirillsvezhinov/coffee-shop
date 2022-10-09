"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class basket_product extends Model {
		static associate({product, basket}) {
			this.belongsTo(basket);
			this.belongsTo(product);
		}
	}

	basket_product.init({
		count: INTEGER,
		defaultPrice: INTEGER,
		totalPrice: INTEGER,
		options: STRING,
		addons: STRING,
	}, {
		sequelize,
		modelName: "basket_product",
		timestamps: false,
	});
	return basket_product;
};