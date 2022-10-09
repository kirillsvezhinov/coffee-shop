"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("categories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			slug: {
				type: STRING
			},
			name: {
				type: STRING
			},
			mainIcon: {
				type: STRING
			},
			secondIcon: {
				type: STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("categories");
	}
};