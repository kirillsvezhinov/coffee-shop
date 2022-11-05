const {
	basket: Basket,
	basket_product: BasketProduct,
	product: Product,
	product_info: ProductInfo,
	option: Option,
	addons: Addons
} = require("../models");

class BasketService {
	async createUserBasket(userId, shop) {
		return await Basket.create({
			userId,
			shop,
		});
	}
	
	async getBasketByUserId(userId) {
		return await Basket.findOne({
			where: {userId},
			include: {
				model: BasketProduct,
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

	async getUserBasket() {
		const basket = await this.getBasketByUserId(1);
		const formattedBasketProducts = basket.basket_products
			.reduce((acc, product) => {
				return [...acc, this.getFormattedBasketProduct(product)];
			}, []);

		return {
			id: basket.id,
			shop: basket.shop,
			products: formattedBasketProducts,
		};
	}
	
	async updateUserBasket(data) {
		const basket = await this.getBasketByUserId(1);
		
		basket.shop = data.shop;
		await basket.save();
		
		await this.deleteAllBasketProducts(1);
		return await this.addProduct(data);
	}

	async createBasketProduct(data) {
		const {options, addons} = data;

		const newBasketProduct = await BasketProduct.create({
			...data,
			options: JSON.stringify(options),
			addons: JSON.stringify(addons),
		});
		const basketProduct = await this.getBasketProduct(newBasketProduct.id);

		return this.getFormattedBasketProduct(basketProduct);
	}

	async getBasketProduct(basketProductId) {
		return await BasketProduct.findOne({
			where: {id: basketProductId},
			include: {
				model: Product,
				include: {
					model: ProductInfo,
					include: [Option, Addons],
				},
			},
		});
	}

	async deleteAllBasketProducts(userId) {
		const basket = await this.getBasketByUserId(userId);
		const deletedBasketProducts = await BasketProduct.destroy({
			where: {basketId: basket.id},
		});
		
		return userId;
	}

	async deleteBasketProduct(basketProductId) {
		const deletedBasketProduct = await BasketProduct.destroy({
			where: {id: basketProductId},
		});
		
		return basketProductId;
	}
	
	async addProduct(data) {
		const {id, shop, product} = data;
		let productData = product;

		if (!id) {
			const newBasket = await this.createUserBasket(1, shop);

			productData = {
				...productData,
				basketId: newBasket.id,
			};
		}

		return {
			id: productData.basketId,
			shop,
			product: await this.createBasketProduct(productData)
		};
	}

	async incProduct(basketProductId) {
		const basketProduct = await this.getBasketProduct(basketProductId);
		const updatedProduct = await basketProduct.increment({
			count: 1,
			totalPrice: basketProduct.defaultPrice,
		});

		return this.getFormattedBasketProduct(updatedProduct);
	}

	async decProduct(basketProductId) {
		const basketProduct = await this.getBasketProduct(basketProductId);
		const updatedProduct = await basketProduct.decrement({
			count: 1,
			totalPrice: basketProduct.defaultPrice,
		});

		return this.getFormattedBasketProduct(updatedProduct);
	}

	getFormattedBasketProduct(basketProduct) {
		const {id, count, totalPrice, defaultPrice, options, addons, product} = basketProduct;

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

module.exports = new BasketService();