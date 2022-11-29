const {
	order: Order,
	order_product: OrderProduct,
	product: Product,
	product_info: ProductInfo,
	option: Option,
	addons: Addons,
	ready: Ready,
	place: Place
} = require("../models");
const basketService = require("./basketService");
const shopService = require("./shopService");
const botService = require("./botService");

class OrderService {
	async getOrders(userId) {
		return await Order.findAll({
			where: {userId},
			include: {
				model: OrderProduct,
				include: {
					model: Product,
					include: {
						model: ProductInfo,
						include: [Option, Addons],
					},
				},
			},
		});
	}

	async getOrderProducts(orderId) {
		return await OrderProduct.findAll({
			where: {orderId},
			include: {
				model: Product,
				include: {
					model: ProductInfo,
					include: [Option, Addons],
				},
			},
		});
	}

	async getUserOrders(userId) {
		const orders = await this.getOrders(userId);

		return orders.reduce((acc, {id, place, ready, comment, order_products}) => {
			const products = this.getFormattedOrderProducts(order_products);

			return [...acc, {id, place, ready, comment, products}];
		}, []);
	}

	async createOrder(data) {
		const {id, shop, place, ready, comment} = data;

		return await Order.create({
			userId: id,
			shop,
			place,
			ready,
			comment
		});
	}

	async createUserOrder(data) {
		console.log(data);
		const {id, shop, place, ready, comment} = await this.createOrder(data);
		for (const product of data.products) {
			try {
				await this.createUserOrderProduct(id, product);
			} catch (e) {
				console.log(e);
			}
		}
		const products = await this.getOrderProducts(id);
		const formattedProducts = this.getFormattedOrderProducts(products);
		const order = {id, shop, place, ready, comment, products: formattedProducts};
		const message = await this.generateOrderMessage(order);
		await botService.sendMessage(message);
		await basketService.deleteAllBasketProducts(1);

		return order;
	}

	async createUserOrderProduct(orderId, product) {
		const {addons, options} = product;

		return await OrderProduct.create({
			orderId,
			...product,
			options: JSON.stringify(options),
			addons: JSON.stringify(addons),
		});
	}

	async generateOrderMessage(order) {
		const {id, shop, place, ready, comment, products} = order;
		const currentShop = await shopService.getShopBySlug(shop);
		const currentReady = await Ready.findOne({
			where: {time: ready}
		});
		const currentPlace = await Place.findOne({
			where: {id: place}
		});
		const currentProducts = products.reduce((acc, product) => {
			const {id, options, addons, productInfo} = product;
			const optionsTitle = options.reduce((acc, option) => {
				const foundOption = productInfo.options.find(o => o.id === option);
				if (!foundOption) return acc;
				return `${acc} ${foundOption.name}`;
			}, "");
			const addonsTitle = addons.reduce((acc, addons) => {
				const foundAddons = productInfo.addons.find(a => a.id === addons);
				if (!foundAddons) return acc;
				return `${acc} ${foundAddons.name}`;
			}, "");

			return `${acc}
			${productInfo.name}
			 - Добавки: ${optionsTitle}
			 - Опции: ${addonsTitle}`;
		}, "");

		return `Адресс: ${currentShop.address}
		Тип заказа: ${currentPlace?.title ?? '' }
		Готовность: ${currentReady?.title ?? ''}
		Заказ: ${currentProducts}
		Комментарий: ${comment}`;
	}
	
	getFormattedOrderProducts(products) {
		return products.map(product => {
			return this.getFormattedOrderProduct(product);
		});
	}

	getFormattedOrderProduct(orderProduct) {
		const {id, count, totalPrice, defaultPrice, options, addons, product} = orderProduct;

		return {
			id,
			productInfo: product.product_info,
			options: JSON.parse(options),
			addons: JSON.parse(addons),
			count,
			totalPrice,
			defaultPrice
		};
	}
}

module.exports = new OrderService();