const basketServices = require("../services/basketService");

class BasketController {
	async getBasket(req, res) {
		try {
			const basket = await basketServices.getUserBasket();
			
			res.status(200).json({
				status: true,
				data: basket
			});
		} catch(e) {
			res.status(409).json({
				status: false,
				data: {},
				message: "Корзина пользователя не найдена",
			});
		}
	}

	async updateBasket(req, res) {
		try {
			const updatedBasketProduct = await basketServices.updateUserBasket(req.body);

			res.status(200).json({
				status: true,
				data: updatedBasketProduct
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка обновления корзины",
			});
		}
	}
	
	async addProduct(req, res) {
		try {
			const data = req.body;
			const newBasketProduct = await basketServices.addProduct(data);

			res.status(200).json({
				status: true,
				data: newBasketProduct
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка добавления продукта",
			});
		}
	}

	async deleteAllProducts(req, res) {
		try {
			const deletedBasketProducts = await basketServices.deleteAllBasketProducts();

			res.status(200).json({
				status: true,
				data: deletedBasketProducts
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: null,
				message: "Ошибка удаления продуктов из корзины",
			});
		}
	}

	async deleteProduct(req, res) {
		try {
			const {basketProductId} = req.body;
			const deletedBasketProduct = await basketServices.deleteBasketProduct(basketProductId);

			res.status(200).json({
				status: true,
				data: deletedBasketProduct
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: null,
				message: "Ошибка удаления продукта из корзины",
			});
		}
	}
	
	async incProduct(req, res) {
		try {
			const {basketProductId} = req.body;
			const updatedProduct = await basketServices.incProduct(basketProductId);
			
			res.status(200).json({
				status: true,
				data: updatedProduct
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: null,
				message: "Ошибка увеличения продукта на единицу",
			});
		}
	}
	
	async decProduct(req, res) {
		try {
			const {basketProductId} = req.body;
			const updatedProduct = await basketServices.decProduct(basketProductId);

			res.status(200).json({
				status: true,
				data: updatedProduct
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: null,
				message: "Ошибка уменьшения продукта на единицу",
			});
		}
	}
}

module.exports = new BasketController();