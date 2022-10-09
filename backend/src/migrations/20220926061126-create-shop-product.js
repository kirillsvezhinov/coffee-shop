"use strict";

module.exports = {
	async up(queryInterface, {INTEGER}) {
		await queryInterface.createTable("shop_products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			shopId: {
				type: INTEGER
			},
			productId: {
				type: INTEGER
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("shop_products");
	}
};