"use strict";

const PRODUCT_INFO_OPTIONS = {
	1: [1, 2, 3, 4],
	2: [1, 2, 3, 4],
	3: [1, 2, 3, 4],
	4: [1, 2, 3, 4],
	5: [1, 2, 3, 4],
	6: [1, 2, 3, 4],
	7: [1, 2, 3, 4],
	8: [1, 2, 3, 4],
	9: [1, 5, 6],
	10: [1, 5, 6],
	11: [1, 5, 6],
	12: [1, 5, 6],
	13: [1, 5, 6],
	14: [],
	15: [],
	16: [],
	17: [1, 5, 6],
	18: [1, 5, 6],
	19: [1, 5, 6],
	20: [],
	21: [],
	22: [],
	23: [],
	24: [],
};

module.exports = {
	async up(queryInterface, Sequelize) {
		const productInfoOptions = Object.entries(PRODUCT_INFO_OPTIONS).reduce((acc, [productInfoId, options]) => {
			const optionsData = options.map(optionId => {
				return {
					productInfoId,
					optionId,
				};
			});

			return [...acc, ...optionsData];
		}, []);

		await queryInterface.bulkInsert("product_info_options", productInfoOptions, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("product_info_options", null, {});
	}
};
