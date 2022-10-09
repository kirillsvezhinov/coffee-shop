"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("nutrition", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			productInfoId: {
				type: INTEGER
			},
			slug: {
				type: STRING
			},
			name: {
				type: STRING
			},
			unit: {
				type: STRING
			},
			value: {
				type: INTEGER
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("nutrition");
	}
};