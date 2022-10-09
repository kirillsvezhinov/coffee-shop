"use strict";

module.exports = {
	async up(queryInterface, {INTEGER}) {
		await queryInterface.createTable("product_info_options", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			productInfoId: {
				type: INTEGER
			},
			optionId: {
				type: INTEGER
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("product_info_options");
	}
};