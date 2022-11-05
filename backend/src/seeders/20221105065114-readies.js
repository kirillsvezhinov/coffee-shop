"use strict";

/** @type {import("sequelize-cli").Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("readies", [
			{
				id: 1,
				time: 5,
				title: "5 минут"
			},
			{
				id: 2,
				time: 10,
				title: "10 минут"
			},
			{
				id: 3,
				time: 15,
				title: "15 минут"
			},
			{
				id: 4,
				time: 20,
				title: "20 минут"
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("readies", null, {});
	}
};
