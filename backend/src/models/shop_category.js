"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER}) => {
	class shop_category extends Model {
		static associate(models) {
		}
	}

	shop_category.init({}, {
		sequelize,
		modelName: "shop_category",
		timestamps: false,
	});
	return shop_category;
};