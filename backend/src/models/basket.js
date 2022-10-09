"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING}) => {
	class basket extends Model {
		static associate({user, basket_product}) {
			this.belongsTo(user);
			this.hasMany(basket_product);
		}
	}

	basket.init({
		shop: STRING,
	}, {
		sequelize,
		modelName: "basket",
		timestamps: false,
	});
	return basket;
};