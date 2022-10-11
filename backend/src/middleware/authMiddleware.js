const jwt = require("jsonwebtoken");
const tokenService = require("../services/tokenService");

class AuthMiddleware {
	verifyToken(req, res, next) {
		if (req.method === "OPTIONS") {
			next();
		}

		try {
			const authorization = req.headers.authorization;
			if (!authorization) {
				return res.status(403).json({
					status: false,
					data: {},
					message: "Отсутствует заголовок Authorization"
				});
			}

			const accessToken = authorization.split(" ")[1];
			if (!accessToken) {
				return res.status(403).json({
					status: false,
					data: {},
					message: "Отсутствует токен"
				});
			}

			const userData = tokenService.verifyAccessToken(accessToken);
			if (!userData) {
				return res.status(403).json({
					status: false,
					data: {},
					message: "Невалидный токен"
				});
			}

			req.user = userData;
			next();
		} catch (e) {
			return res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка проверки токена"
			});
		}
	}
}

module.exports = new AuthMiddleware();