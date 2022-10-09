"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class option extends Model {
		static associate({product_info, product_info_option}) {
			this.belongsToMany(product_info, {through: product_info_option});
		}
	}

	option.init({
		slug: STRING,
		name: STRING,
		price: INTEGER,
	}, {
		sequelize,
		modelName: "option",
		timestamps: false,
	});
	return option;
};