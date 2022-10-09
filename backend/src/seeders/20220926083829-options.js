"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("options", [
			{
				slug: "none",
				name: "Без модификаций",
				price: 0,
			},
			{
				slug: "sugarless",
				name: "Меньше сахара",
				price: 0,
			},
			{
				slug: "sugarMore",
				name: "Больше сахара",
				price: 20,
			},
			{
				slug: "ice",
				name: "Со льдом",
				price: 10,
			},
			{
				slug: "freeze",
				name: "Подать холодным",
				price: 0,
			},
			{
				slug: "hot",
				name: "Подать горячим",
				price: 0,
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("options", null, {});
	}
};
