"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("addons", {
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
			price: {
				type: INTEGER
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("addons");
	}
};