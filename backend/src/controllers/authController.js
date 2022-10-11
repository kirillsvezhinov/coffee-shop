const authService = require("../services/authService");

class AuthController {
	async registration(req, res) {
		const {name, email, password} = req.body;
		const user = await authService.registration(name, email, password);
		
		try {
			if (!user) {
				return res.status(404).json({
					status: false,
					data: {},
					message: "Пользователь с такими данными уже зарегистрирован"
				});
			}

			authService.setRefreshToken(res, user.refreshToken);

			res.status(200).json({
				status: true,
				data: user,
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка регистрации!"
			});
		}
	}

	async login(req, res) {
		const {email, password} = req.body;
		const user = await authService.login(email, password);
		
		try {

			if (!user) {
				return res.status(404).json({
					status: false,
					data: {},
					message: "Неверный логин или пароль"
				});
			}

			authService.setRefreshToken(res, user.refreshToken);

			res.status(200).json(user);
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка авторизации!"
			});
		}
	}

	async logout(req, res) {
		try {
			authService.logout(res);
			
			res.status(200).json({
				status: true,
				data: {},
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка выхода"
			});
		}
	}
	
	async refresh(req, res) {
		const {refreshToken} = req.cookie;
		
		try {
			const user = authService.refresh(refreshToken);
			authService.setRefreshToken(res, user.refreshToken);

			res.status(200).json({
				status: true,
				data: user,
			});
		} catch (e) {
			res.status(500).json({
				status: false,
				data: {},
				message: "Ошибка обновления refresh токена"
			});
		}
	}
}

module.exports = new AuthController();