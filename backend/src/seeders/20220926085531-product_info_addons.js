"use strict";

const PRODUCT_INFO_ADDONS = {
	1: [1, 2, 3, 4, 5],
	2: [1, 2, 3, 4, 5],
	3: [1, 2, 3, 4, 5],
	4: [1, 2, 3, 4, 5],
	5: [1, 2, 3, 4, 5],
	6: [1, 2, 3, 4, 5],
	7: [1, 2, 3, 4, 5],
	8: [1, 2, 3, 4, 5],
	9: [1, 11],
	10: [1, 7, 8, 11],
	11: [1, 9, 10],
	12: [1, 6, 7, 8],
	13: [1, 6, 7, 8],
	14: [],
	15: [],
	16: [],
	17: [1, 6, 7],
	18: [1, 13],
	19: [1, 13],
	20: [1, 2, 3, 4, 5, 6, 7],
	21: [1, 2, 3, 4, 5, 6, 7],
	22: [1, 6, 7],
	23: [1, 6, 7],
	24: [1, 6, 7],
};

module.exports = {
	async up(queryInterface, Sequelize) {
		const productInfoAddons = Object.entries(PRODUCT_INFO_ADDONS).reduce((acc, [productInfoId, addons]) => {
			const addonsData = addons.map(addonId => {
				return {
					productInfoId,
					addonId,
				};
			});

			return [...acc, ...addonsData];
		}, []);

		await queryInterface.bulkInsert("product_info_addons", productInfoAddons, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("product_info_addons", null, {});
	}
};
