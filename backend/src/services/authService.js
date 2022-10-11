const userService = require("../services/userService");
const tokenService = require("../services/tokenService");
const bcrypt = require("bcrypt");

class AuthService {
	async registration(name, email, password) {
		const user = await userService.getUserByEmail(email);
		if (user) return false;

		const hashPassword = await bcrypt.hash(password, 3);
		const newUser = await userService.createUser({
			name,
			email,
			password: hashPassword,
		});
		const tokens = tokenService.generateTokens(newUser);

		return {
			user: user,
			...tokens,
		};
	}

	async login(email, password) {
		const user = await userService.getUserByEmail(email);
		if (!user) return false;

		const isEqualPasswords = bcrypt.compare(password, user.password);
		if (!isEqualPasswords) return false;

		const tokens = tokenService.generateTokens(user);

		return {
			user,
			...tokens,
		};
	}

	logout(res) {
		res.clearCookie("refreshToken");
	}

	async refresh(refreshToken) {
		if (!refreshToken) return;

		const userData = await tokenService.verifyRefreshToken(refreshToken);
		if (!userData) return;

		const user = await userService.getUserById(userData.id);
		const tokens = tokenService.generateTokens(user);

		return tokens;
	}

	setRefreshToken(res, refreshToken) {
		res.cookie("refreshToken", refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000,
			httpOnly: true
		});
	}
}

module.exports = new AuthService();