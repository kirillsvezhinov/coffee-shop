"use strict";

const {
	Model
} = require("sequelize");

module.exports = (sequelize, {INTEGER, STRING}) => {
	class ready extends Model {
		static associate(models) {
		}
	}

	ready.init({
		time: INTEGER,
		title: STRING,
	}, {
		sequelize,
		modelName: "ready",
		timestamps: false,
	});
	return ready;
};