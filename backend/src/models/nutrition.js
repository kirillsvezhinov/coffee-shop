"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class nutrition extends Model {
		static associate({product_info}) {
			this.belongsTo(product_info);
		}
	}

	nutrition.init({
		slug: STRING,
		name: STRING,
		unit: STRING,
		value: INTEGER,
	}, {
		sequelize,
		modelName: "nutrition",
		timestamps: false,
	});
	return nutrition;
};