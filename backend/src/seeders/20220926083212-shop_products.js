"use strict";

const SHOP_PRODUCTS = {
	1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	2: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 18, 19, 20, 21, 22, 23],
	3: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24],
	4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	5: [1, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23],
	6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17],
	7: [1, 2, 3, 4, 5, 6, 13, 17, 18, 19, 20, 21, 22, 23, 24],
};

module.exports = {
	async up(queryInterface, Sequelize) {
		const shopProducts = Object.entries(SHOP_PRODUCTS).reduce((acc, [shopId, products]) => {
			const productsData = products.map(productId => {
				return {
					shopId,
					productId,
				};
			});

			return [...acc, ...productsData];
		}, []);

		await queryInterface.bulkInsert("shop_products", shopProducts, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("shop_products", null, {});
	}
};
