"use strict";

module.exports = {
	async up(queryInterface, {INTEGER, STRING, ARRAY}) {
		await queryInterface.createTable("shops", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: INTEGER
			},
			slug: {
				type: STRING
			},
			name: {
				type: STRING
			},
			address: {
				type: STRING
			},
			photos: {
				type: ARRAY(STRING)
			},
			weekdaysStart: {
				type: STRING
			},
			weekdaysEnd: {
				type: STRING
			},
			weekendsStart: {
				type: STRING
			},
			weekendsEnd: {
				type: STRING
			},
			mainColor: {
				type: STRING
			},
			secondColor: {
				type: STRING
			},
			transparency: {
				type: STRING
			},
			bc: {
				type: STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("shops");
	}
};