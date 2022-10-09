"use strict";

module.exports = {
	async up(queryInterface, {INTEGER}) {
		await queryInterface.createTable("shop_categories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			shopId: {
				type: INTEGER
			},
			categoryId: {
				type: INTEGER
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("shop_categories");
	}
};