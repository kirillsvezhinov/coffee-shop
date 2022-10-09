"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("addons", [
			{
				slug: "none",
				name: "Без добавок",
				price: 0,
			},
			{
				slug: "soyaMilk",
				name: "Соевое молоко",
				price: 20,
			},
			{
				slug: "coconutMilk",
				name: "Кокосовое молоко",
				price: 20,
			},
			{
				slug: "chocolate",
				name: "Шоколадная крошка",
				price: 40,
			},
			{
				slug: "marshmallow",
				name: "Маршмеллоу",
				price: 60,
			},
			{
				slug: "strawberry",
				name: "Клубника",
				price: 70,
			},
			{
				slug: "banana",
				name: "Банан",
				price: 40,
			},
			{
				slug: "ketchup",
				name: "Кетчуп",
				price: 10,
			},
			{
				slug: "cheese",
				name: "Сыр",
				price: 30,
			},
			{
				slug: "onionsFried",
				name: "Жаренный лук",
				price: 20,
			},
			{
				slug: "sourCream",
				name: "Сметана",
				price: 30,
			},
			{
				slug: "condensedMilk",
				name: "Сгущенное молоко",
				price: 30,
			},
			{
				slug: "bread",
				name: "Хлеб",
				price: 10,
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("addons", null, {});
	}
};
