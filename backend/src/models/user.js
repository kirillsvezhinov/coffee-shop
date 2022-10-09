"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, { STRING }) => {
	class user extends Model {
		static associate({basket}) {
			this.hasOne(basket);
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