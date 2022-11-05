"use strict";
const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING, INTEGER}) => {
	class order extends Model {
		static associate({user, order_product}) {
			this.hasMany(order_product);
			this.belongsTo(user);
		}
	}

	order.init({
		shop: STRING,
		place: INTEGER,
		ready: INTEGER,
		comment: STRING,
	}, {
		sequelize,
		modelName: "order",
		timestamps: false,
	});
	return order;
};