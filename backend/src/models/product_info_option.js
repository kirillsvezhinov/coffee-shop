"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {}) => {
	class product_info_option extends Model {
		static associate(models) {
		}
	}

	product_info_option.init({
	}, {
		sequelize,
		modelName: "product_info_option",
		timestamps: false,
	});

	return product_info_option;
};