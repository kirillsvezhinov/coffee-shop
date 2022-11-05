"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING, INTEGER}) => {
	class order_product extends Model {
		static associate({order, product}) {
			this.belongsTo(order);
			this.belongsTo(product);
		}
	}

	order_product.init({
		count: INTEGER,
		defaultPrice: INTEGER,
		totalPrice: INTEGER,
		options: STRING,
		addons: STRING,
	}, {
		sequelize,
		modelName: "order_product",
		timestamps: false,
	});
	return order_product;
};