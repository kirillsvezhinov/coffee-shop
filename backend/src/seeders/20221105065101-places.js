"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("places", [
			{
				id: 1,
				title: "С собой"
			},
			{
				id: 2,
				title: "В кофейне"
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("places", null, {});
	}
};
