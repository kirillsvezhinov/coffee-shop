"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("products", [
			{
				slug: "expresso",
				categoryId: 2,
				name: "Эспрессо",
				price: 109,
			},
			{
				slug: "filter-coffe",
				categoryId: 2,
				name: "Фильтр-кофе",
				price: 129,
			},
			{
				slug: "americano",
				categoryId: 2,
				name: "Американо",
				price: 129,
			},
			{
				slug: "capuchino",
				categoryId: 2,
				name: "Капучино",
				price: 129,
			},
			{
				slug: "flat-white",
				categoryId: 2,
				name: "Флэт Уайт",
				price: 129,
			},
			{
				slug: "latte",
				categoryId: 2,
				name: "Латте",
				price: 129,
			},
			{
				slug: "matcha-latte",
				categoryId: 2,
				name: "Матча Латте",
				price: 259,
			},
			{
				slug: "cocoa",
				categoryId: 2,
				name: "Какао с зефирками",
				price: 159,
			},
			{
				slug: "vafli-s-bananom-i-morozhenym",
				categoryId: 3,
				name: "Вафли с бананом и мороженым",
				price: 229,
			},
			{
				slug: "salat-cezar",
				categoryId: 3,
				name: "Салат Цезарь",
				price: 209,
			},
			{
				slug: "syrniki",
				categoryId: 1,
				name: "Сырники",
				price: 239,
			},
			{
				slug: "sendvich-s-vetchinoj",
				categoryId: 1,
				name: "Сэндвич с ветчиной",
				price: 179,
			},
			{
				slug: "sendvich-s-kopchenoj-kuricej",
				categoryId: 1,
				name: "Сэндвич с копченой курицей",
				price: 229,
			},
			{
				slug: "braziliya-fensi",
				categoryId: 4,
				name: "Бразилия Фенси",
				price: 420,
			},
			{
				slug: "gvatemala-union-centinel",
				categoryId: 4,
				name: "Гватемала Унион Центинел",
				price: 410,
			},
			{
				slug: "colombia-gaitania",
				categoryId: 4,
				name: "Colombia Gaitania",
				price: 540,
			},
			{
				slug: "risovaia-kasha-na-kokosovom-moloke-s-mango-i-mindalnymi-lepestkami",
				categoryId: 1,
				name: "Рисовая каша на кокосовом молоке с манго и миндальными лепестками",
				price: 179,
			},
			{
				slug: "irlandskii-zavtrak",
				categoryId: 1,
				name: "Ирландский завтрак",
				price: 369,
			},
			{
				slug: "amerikanskii-zavtrak",
				categoryId: 1,
				name: "Американский завтрак",
				price: 299,
			},
			{
				slug: "smuzi-mango-shejk",
				categoryId: 2,
				name: "Смузи Манго Шейк",
				price: 159,
			},
			{
				slug: "espresso-tonik-lemongrass",
				categoryId: 2,
				name: "Эспрессо-Тоник Лемонграсс",
				price: 219,
			},
			{
				slug: "bambl-kofe",
				categoryId: 2,
				name: "Бамбл кофе",
				price: 209,
			},
			{
				slug: "limonad-klubnika-marakujya",
				categoryId: 2,
				name: "Лимонад Клубника-Маракуйя",
				price: 109,
			},
			{
				slug: "matcha-mango-kokos",
				categoryId: 2,
				name: "Матча Манго-Кокос",
				price: 219,
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("products", null, {});
	}
};
