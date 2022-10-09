"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("baskets", [
			{
				id: 1,
				userId: 1,
				shop: "ocean",
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("baskets", null, {});
	}
};
