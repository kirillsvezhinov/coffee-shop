const jwt = require("jsonwebtoken");

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY, {expiresIn: "24h"});
		const refreshToken = jwt.sign(payload.toJSON(), process.env.SECRET_KEY, {expiresIn: "30d"});

		return {
			accessToken,
			refreshToken
		};
	}

	verifyRefreshToken(refreshToken) {
		return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
	}

	verifyAccessToken(accessToken) {
		return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
	}
}

module.exports = new TokenService();