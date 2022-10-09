"use strict";
module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			slug: {
				type: STRING
			},
			categoryId: {
				type: INTEGER
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
		await queryInterface.dropTable("products");
	}
};