const orderServices = require("../services/orderService");

class OrderController {
	async createOrder(req, res) {
		try {
			const currentOrder = await orderServices.createUserOrder(req.body);

			res.status(200).json({
				status: true,
				data: currentOrder
			});
		} catch(e) {
			res.status(404).json({
				status: false,
				data: {},
				message: "Ошибка оформления заказа",
			});
		}
	}

	async getOrders(req, res) {
		try {
			const orders = await orderServices.getUserOrders(1);

			res.status(200).json({
				status: true,
				data: orders
			});
		} catch(e) {
			res.status(404).json({
				status: false,
				data: {},
				message: "Ошибка получения списка заказов",
			});
		}
	}
}

module.exports = new OrderController();