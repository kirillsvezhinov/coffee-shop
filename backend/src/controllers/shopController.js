const shopServices = require("../services/shopServices");

class ShopController {
	async getShops(req, res) {
		try {
			const allShops = await shopServices.getAllShops();

			res.status(200).json({
				status: true,
				data: allShops,
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				message: "Ошибка при получении списка кофейн",
				data: [],
			});
		}
	}

	async getCategories(req, res) {
		const {shop} = req.params;
		
		try {
			const shopWithCategories = await shopServices.getShopCategories(shop);

			res.status(200).json({
				status: true,
				data: shopWithCategories,
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				message: `Ошибка при получении категорий магазина ${shop}`,
				data: [],
			});
		}
	}
}

module.exports = new ShopController();
