const productServices = require("../services/productServices");

class ProductController {
	async getProductInfo(req, res) {
		const { product } = req.params;
		
		try {
			const productInfo = await productServices.getProductInfo("slug", product);

			res.status(200).json({
				status: true,
				data: productInfo,
			});
		} catch (e) {
			res.status(409).json({
				status: false,
				data: {},
				message: `Не найдена информация по продукту ${product}`
			});
		}
	}
}

module.exports = new ProductController();
