"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class product_info extends Model {
		static associate({option, addons, nutrition, product_info_option, product_info_addons}) {
			this.belongsToMany(option, {through: product_info_option});
			this.belongsToMany(addons, {through: product_info_addons});
			this.hasMany(nutrition);
		}
	}

	product_info.init({
		slug: STRING,
		name: STRING,
		size: STRING,
		price: INTEGER,
		description: STRING,
		photo: STRING,
	}, {
		sequelize,
		modelName: "product_info",
		timestamps: false,
	});
	return product_info;
};