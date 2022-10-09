"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class addons extends Model {
		static associate({product_info, product_info_addons}) {
			this.belongsToMany(product_info, {through: product_info_addons});
		}
	}

	addons.init({
		slug: STRING, name: STRING, price: INTEGER,
	}, {
		sequelize,
		modelName: "addons",
		timestamps: false,
	});
	return addons;
};