"use strict";
/** @type {import("sequelize-cli").Migration} */

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("orders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			userId: {
				type: INTEGER
			},
			shop: {
				type: STRING
			},
			place: {
				type: INTEGER
			},
			ready: {
				type: INTEGER
			},
			comment: {
				type: STRING
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("orders");
	}
};