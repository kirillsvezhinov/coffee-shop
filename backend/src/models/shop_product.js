"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER}) => {
	class shop_product extends Model {
		static associate(models) {
		}
	}

	shop_product.init({}, {
		sequelize,
		modelName: "shop_product",
		timestamps: false,
	});
	return shop_product;
};