"use strict";
/** @type {import("sequelize-cli").Migration} */

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("order_products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			orderId: {
				type: INTEGER
			},
			productId: {
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
		await queryInterface.dropTable("order_products");
	}
};