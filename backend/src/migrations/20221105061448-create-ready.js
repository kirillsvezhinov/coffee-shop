"use strict";
/** @type {import("sequelize-cli").Migration} */

module.exports = {
	async up(queryInterface, {INTEGER, STRING}) {
		await queryInterface.createTable("readies", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			time: {
				type: INTEGER
			},
			title: {
				type: STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("readies");
	}
};