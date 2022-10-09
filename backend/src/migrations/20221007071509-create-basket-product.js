"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("basket_products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			productId: {
				type: INTEGER
			},
			basketId: {
				type: INTEGER
			},
			count: {
				type: INTEGER
			},
			totalPrice: {
				type: INTEGER
			},
			defaultPrice: {
				type: INTEGER
			},
			options: {
				type: STRING
			},
			addons: {
				type: STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("basket_products");
	}
};