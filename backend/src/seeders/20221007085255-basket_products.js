"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("basket_products", [
			{
				basketId: 1,
				productId: 1,
				count: 2,
				defaultPrice: 109,
				totalPrice: 218,
				options: "[2]",
				addons: "[3]",
			},
			{
				basketId: 1,
				productId: 1,
				count: 1,
				defaultPrice: 129,
				totalPrice: 129,
				options: "[1]",
				addons: "[1]",
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("basket_products", null, {});
	}
};
