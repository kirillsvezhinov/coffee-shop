"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("shop_categories", [
			{
				shopId: 1,
				categoryId: 1,
			},
			{
				shopId: 1,
				categoryId: 2,
			},
			{
				shopId: 1,
				categoryId: 3,
			},
			{
				shopId: 1,
				categoryId: 4,
			},
			{
				shopId: 2,
				categoryId: 1,
			},
			{
				shopId: 2,
				categoryId: 2,
			},
			{
				shopId: 2,
				categoryId: 3,
			},
			{
				shopId: 3,
				categoryId: 1,
			},
			{
				shopId: 3,
				categoryId: 2,
			},
			{
				shopId: 3,
				categoryId: 3,
			},
			{
				shopId: 3,
				categoryId: 4,
			},
			{
				shopId: 4,
				categoryId: 1,
			},
			{
				shopId: 4,
				categoryId: 2,
			},
			{
				shopId: 4,
				categoryId: 3,
			},
			{
				shopId: 4,
				categoryId: 4,
			},
			{
				shopId: 5,
				categoryId: 1,
			},
			{
				shopId: 5,
				categoryId: 2,
			},
			{
				shopId: 5,
				categoryId: 3,
			},
			{
				shopId: 6,
				categoryId: 1,
			},
			{
				shopId: 6,
				categoryId: 2,
			},
			{
				shopId: 6,
				categoryId: 3,
			},
			{
				shopId: 7,
				categoryId: 1,
			},
			{
				shopId: 7,
				categoryId: 2,
			},
			{
				shopId: 7,
				categoryId: 3,
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("shop_categories", null, {});
	}
};
