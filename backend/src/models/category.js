"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING}) => {
	class category extends Model {
		static associate({product, shop, shop_category}) {
			this.belongsToMany(shop, {through: shop_category});
			this.hasMany(product);
		}
	}

	category.init({
		slug: STRING,
		name: STRING,
		mainIcon: STRING,
		secondIcon: STRING,
	}, {
		sequelize,
		modelName: "category",
		timestamps: false,
	});
	return category;
};