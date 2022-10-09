"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("users", [
			{
				id: 1,
				name: "Алёна",
				email: "ahyk2346@gmail.com",
				password: "banana",
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("users", null, {});
	}
};
