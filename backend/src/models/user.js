"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, { STRING }) => {
	class user extends Model {
		static associate({basket, order}) {
			this.hasOne(basket);
			this.hasMany(order);
		}
	}

	user.init({
		name: STRING,
		email: STRING,
		password: STRING,
	}, {
		sequelize,
		modelName: "user",
		timestamps: false,
	});
	return user;
};