"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("product_infos", [
			{
				slug: "expresso",
				productId: 1,
				name: "Эспрессо",
				size: "60 мл",
				price: 109,
				description:
					"Эспрессо - это основа всех кофейных напитков, малого объема, с сбалансированным вкусом и тонкими нотками вишни, лимона и темного шоколада. Превосходно подойдёт для моментального пробуждения.",
				photo: "/products/expresso.jpg",
			},
			{
				slug: "filter-coffe",
				productId: 2,
				name: "Фильтр-кофе",
				size: "250 мл",
				price: 129,
				photo: "/products/filter-coffee.jpg",
				description:
					"В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день",
			},
			{
				slug: "americano",
				productId: 3,
				name: "Американо",
				size: "350 мл",
				price: 129,
				photo: "/products/americano.jpg",
				description:
					"В Фильтр Американо раскрывается яркий букет кофе. Это классический черный напиток, который зарядит вас бодростью и энергией с утра и на весь день",
			},
			{
				slug: "capuchino",
				productId: 4,
				name: "Капучино",
				size: "350 мл",
				price: 129,
				photo: "/products/capuchino.jpg",
				description:
					"Идеально сбалансированный кофейный напиток, для тех кто ценит классику и постоянство. Готовится на двух эспрессо с долей молока 80%",
			},
			{
				slug: "flat-white",
				productId: 5,
				name: "Флэт Уайт",
				size: "220 мл",
				price: 129,
				photo: "/products/flat-white.jpg",
				description:
					"Флэт уайт подходит тем, кто хочет проснуться, или тем, кто в кофейных напитках ценит в первую очередь вкус кофе.",
			},
			{
				slug: "latte",
				productId: 6,
				name: "Латте",
				size: "350 мл",
				price: 129,
				photo: "/products/latte.jpg",
				description:
					"Нежный, молочный напиток с легким вкусом кофе. Готовится на одном эспрессо. 90% молока. Латте подходит для любого времени суток",
			},
			{
				slug: "matcha-latte",
				productId: 7,
				name: "Матча Латте",
				size: "291 мл",
				price: 259,
				photo: "/products/matcha-latte.jpg",
				description:
					"Отличное сочетание чая матча, обладающего потрясающим бодрящим эффектом, избавляющим от усталости и придающим сил, с кокосовым молоком. Латте матча превосходен для тех, кто следит за своим здоровьем",
			},
			{
				slug: "cocoa",
				productId: 8,
				name: "Какао с зефирками",
				size: "255 мл",
				price: 159,
				photo: "/products/cacao.jpg",
				description:
					"Какао имеет яркий шоколадный вкус и сливочную текстуру, готовится на основе натурального горячего шоколада и молока",
			},
			{
				slug: "vafli-s-bananom-i-morozhenym",
				productId: 9,
				name: "Вафли с бананом и мороженым",
				size: "250 г",
				price: 229,
				photo: "/products/vafli-s-bananom-i-morozhenym.jpg",
				description:
					"Тёплая вафля с карамелизированным бананом, классическим пломбиром и горячим бельгийским шоколадом",
			},
			{
				slug: "salat-cezar",
				productId: 10,
				name: "Салат Цезарь",
				size: "215 г",
				price: 209,
				photo: "/products/salat-cezar.jpg",
				description:
					"Хрустящие листья салата айсберг, сочная куриная грудка заправленные соусом цезарь, гарнируется спелыми томатами черри, половинкой куриного яйца и подпечёнными сухариками, последний штрих – выдержанный итальянский сыр пармезан",
			},
			{
				slug: "syrniki",
				productId: 11,
				name: "Сырники",
				size: "300 г",
				price: 239,
				photo: "/products/syrniki.jpg",
				description:
					"Подпечённые сырники из нежного творога, приготовленные по особому рецепту. Подаем их с ароматным клубничным соусом и свежей фермерской сметаной",
			},
			{
				slug: "sendvich-s-vetchinoj",
				productId: 12,
				name: "Сэндвич с ветчиной",
				size: "195 г",
				price: 179,
				photo: "/products/sendvich-s-vetchinoj.jpg",
				description:
					"Сэндвич с ломтиками сочной ветчины, ароматным сыром Эдам, спелым томатом, маринованным огурцом и сырным соусом, приготовленный на подпеченных тостах",
			},
			{
				slug: "sendvich-s-kopchenoj-kuricej",
				productId: 13,
				name: "Сэндвич с копченой курицей",
				size: "190 г",
				price: 179,
				photo: "/products/sendvich-s-kopchenoj-kuricej.jpg",
				description:
					"Сэндвич с ломтиками копченной куриной грудки, свежим томатом, ароматным сыром Эдам, маринованным огурцом и сырным соусом, приготовленный на подпеченных тостах",
			},
			{
				slug: "braziliya-fensi",
				productId: 14,
				name: "Бразилия Фенси",
				size: "250 г",
				price: 420,
				photo: "/products/braziliya-fensi.jpg",
				description:
					"Обжарка под эспрессо/n Во вкусе: карамель, слива, тёмный шоколад/n Сорт: Красный Катуаи/n Обработка: Натуральная/n Высота: 950-1050/n Подойдет для заваривания в эспрессо машине, мокка, джезве",
			},
			{
				slug: "gvatemala-union-centinel",
				productId: 15,
				name: "Гватемала Унион Центинел",
				size: "250 г",
				price: 410,
				photo: "/products/gvatemala-union-centinel.jpg",
				description:
					"Обжарка под фильтр/n Во вкусе: апельсин, какао, сухофрукты/n Высота: 1700-1800/n Сорт: бурбон, катурра, типика/n Обработка: Мытая Подойдет для заваривания в капельной кофеварке, френч-прессе, v60, кемекс, джезве",
			},
			{
				slug: "colombia-gaitania",
				productId: 16,
				name: "Colombia Gaitania",
				size: "250 г",
				price: 540,
				photo: "/products/colombia-gaitania.jpg",
				description:
					"Обжарка под фильтр/n Во вкусе: вишня, карамель, тёмный шоколад/n Высота: 1700/n Сорт: SL28, SL34/n Обработка: Мытая Подойдет для заваривания в капельной кофеварке, френч-прессе, v60, кемекс, джезве",
			},
			{
				slug: "risovaia-kasha-na-kokosovom-moloke-s-mango-i-mindalnymi-lepestkami",
				productId: 17,
				name: "Рисовая каша на кокосовом молоке с манго и миндальными лепестками",
				size: "250 г",
				price: 179,
				photo: "/products/risovaia-kasha-na-kokosovom-moloke.jpg",
				description:
					"Рисовая каша, томленная на кокосовом молоке, гарнируется сочными кусочками манго, кокосовой стружкой и миндальными лепестками",
			},
			{
				slug: "irlandskii-zavtrak",
				productId: 18,
				name: "Ирландский завтрак",
				size: "421 г",
				price: 369,
				photo: "/products/irlandskii-zavtrak.jpg",
				description:
					"Традиционный ирландский завтрак: глазунья с хрустящим беконом, жареными грибами, сочной сосиской, тёплой тушёной фасолью и свежим огурцом . Подаётся с подпеченным ломтиком хлеба и кунжутом",
			},
			{
				slug: "amerikanskii-zavtrak",
				productId: 19,
				name: "Американский завтрак",
				size: "360 г",
				price: 299,
				photo: "/products/amerikanskii-zavtrak.jpg",
				description:
					"Глазунья из двух яиц с тёплой фасолью, спелым томатом, поджаренной сосиской, хрустящий огурец, кунжут и подпеченный ломтик хлеба",
			},
			{
				slug: "smuzi-mango-shejk",
				productId: 20,
				name: "Смузи Манго Шейк",
				size: "350 мл",
				price: 159,
				photo: "/products/smuzi-mango-shejk.jpg",
				description:
					"Один из традиционных вьетнамских коктейлей. Освежающее сладкое и терпкое лакомство, приготовленное из свежего манго со сливочным вкусом сгущенного молока",
			},
			{
				slug: "espresso-tonik-lemongrass",
				productId: 21,
				name: "Эспрессо-Тоник Лемонграсс",
				size: "360 мл",
				price: 219,
				photo: "/products/espresso-tonik-lemongrass.jpg",
				description:
					"Порция эспрессо и тоник, вылитые в стакан со льдом освежают, а сочетание лемонграсса и лайма в его составе делает напиток бодрящим.",
			},
			{
				slug: "bambl-kofe",
				productId: 22,
				name: "Бамбл кофе",
				size: "250 мл",
				price: 209,
				photo: "/products/bambl-kofe.jpg",
				description:
					"Яркая цитрусовая свежесть оттеняется сладостью ванили в сочетании с эспрессо. Освежающий, бодрящий, богатый витамином С.",
			},
			{
				slug: "limonad-klubnika-marakujya",
				productId: 23,
				name: "Лимонад Клубника-Маракуйя",
				size: "350 мл",
				price: 109,
				photo: "/products/limonad-klubnika-marakujya.jpg",
				description:
					"Лимонад для всех, кто хочет насладиться тропическим освежающим ярким вкусом. Отлично подойдет для вечерних посиделок на свежем воздухе",
			},
			{
				slug: "matcha-mango-kokos",
				productId: 24,
				name: "Матча Манго-Кокос",
				size: "380 мл",
				price: 219,
				photo: "/products/matcha-mango-kokos.jpg",
				description:
					"Тонизирующий, тропически-пикантный холодный напиток с ярким вкусом матчи в сочетании с манго и кокосовым молоком.",
			},
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("product_infos", null, {});
	}
};
