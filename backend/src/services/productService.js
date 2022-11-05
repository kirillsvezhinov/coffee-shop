const {
	product: Product,
	product_info: ProductInfo,
	addons: Addons,
	option: Option,
	nutrition: Nutrition
} = require("../models");

class ProductService {
	async getProductInfo(key, value) {
		const productInfo = await Product.findOne({
			where: {
				[key]: value
			},
			include: {
				model: ProductInfo,
				include: [Addons, Option, Nutrition],
			},
		});
		
		return productInfo["product_info"];
	}
}

module.exports = new ProductService();