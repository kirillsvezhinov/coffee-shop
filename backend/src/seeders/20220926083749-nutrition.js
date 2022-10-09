"use strict";

const NUTRITION = {
	1: [120, 23, 17, 38],
	2: [120, 23, 17, 38],
	3: [120, 23, 17, 38],
	4: [120, 23, 17, 38],
	5: [120, 23, 17, 38],
	6: [120, 23, 17, 38],
	7: [120, 23, 17, 38],
	8: [120, 23, 17, 38],
	9: [120, 23, 17, 38],
	10: [120, 23, 17, 38],
	11: [120, 23, 17, 38],
	12: [120, 23, 17, 38],
	13: [120, 23, 17, 38],
	14: [120, 23, 17, 38],
	15: [120, 23, 17, 38],
	16: [120, 23, 17, 38],
	17: [120, 23, 17, 38],
	18: [120, 23, 17, 38],
	19: [120, 23, 17, 38],
	20: [120, 23, 17, 38],
	21: [120, 23, 17, 38],
	22: [120, 23, 17, 38],
	23: [120, 23, 17, 38],
	24: [120, 23, 17, 38],
};

const nutritionData = {
	0: {
		slug: "kkal",
		name: "Эц",
		unit: "Ккал",
	},
	1: {
		slug: "protein",
		name: "Белки",
		unit: "г",
	},
	2: {
		slug: "fat",
		name: "Жиры",
		unit: "г",
	},
	3: {
		slug: "carb",
		name: "Углеводы",
		unit: "г",
	},
};

module.exports = {
	async up(queryInterface, Sequelize) {
		const nutritious = Object.entries(NUTRITION).reduce((acc, [productInfoId, nutritious]) => {
			const productNutrition = nutritious.map((nutrition, index) => {
				return {
					productInfoId: +productInfoId,
					slug: nutritionData[index].slug,
					name: nutritionData[index].name,
					unit: nutritionData[index].unit,
					value: nutritious[index],
				};
			});

			return [...acc, ...productNutrition];
		}, []);

		await queryInterface.bulkInsert("nutrition", nutritious, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("nutrition", null, {});
	}
};