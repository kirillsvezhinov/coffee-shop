"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			name: {
				type: STRING
			},
			email: {
				type: STRING
			},
			password: {
				type: STRING
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("users");
	}
};