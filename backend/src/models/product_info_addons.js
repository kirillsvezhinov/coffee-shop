"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {}) => {
	class product_info_addons extends Model {
		static associate(models) {
		}
	}

	product_info_addons.init({
	}, {
		sequelize,
		modelName: "product_info_addons",
		timestamps: false,
	});
	return product_info_addons;
};