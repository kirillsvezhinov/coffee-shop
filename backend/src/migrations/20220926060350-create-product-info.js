"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("product_infos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			slug: {
				type: STRING
			},
			productId: {
				type: INTEGER
			},
			name: {
				type: STRING
			},
			size: {
				type: STRING
			},
			price: {
				type: INTEGER
			},
			description: {
				type: STRING
			},
			photo: {
				type: STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("product_infos");
	}
};