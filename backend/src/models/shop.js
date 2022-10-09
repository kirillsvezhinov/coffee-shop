"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING, ARRAY}) => {
	class shop extends Model {
		static associate({product, shop_product, category, shop_category}) {
			this.belongsToMany(product, {through: shop_product});
			this.belongsToMany(category, {through: shop_category});
		}
	}

	shop.init({
		slug: STRING,
		name: STRING,
		address: STRING,
		photos: ARRAY(STRING),
		weekdaysStart: STRING,
		weekdaysEnd: STRING,
		weekendsStart: STRING,
		weekendsEnd: STRING,
		mainColor: STRING,
		secondColor: STRING,
		transparency: STRING,
		bc: STRING,
	}, {
		sequelize,
		modelName: "shop",
		timestamps: false,
	});
	return shop;
};