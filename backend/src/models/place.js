"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {STRING}) => {
	class place extends Model {
		static associate(models) {
		}
	}

	place.init({
		title: STRING
	}, {
		sequelize,
		modelName: "place",
		timestamps: false,
	});
	return place;
};