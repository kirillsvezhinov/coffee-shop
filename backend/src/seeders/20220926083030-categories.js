"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("categories", [
			{
				slug: "breakfast",
				name: "Завтраки",
				mainIcon: "clock",
				secondIcon: "breakfast",
			},
			{
				slug: "drinks",
				name: "Напитки",
				mainIcon: "coffee-cup",
				secondIcon: "coffee-latte",
			},
			{
				slug: "food",
				name: "Еда",
				mainIcon: "cake",
				secondIcon: "sandwich",
			},
			{
				slug: "coffee",
				name: "Зерновой кофе",
				mainIcon: "coffee-bean",
				secondIcon: "coffee-bean",
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("categories", null, {});
	}
};
