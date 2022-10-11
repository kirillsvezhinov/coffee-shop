const {
	user: User
} = require("../models");

class UserService {
	async createUser(userData) {
		return await User.create(userData);
	}
	
	async getUserById(id) {
		return await User.findOne({
			where: {id},
		});
	}
	
	async getUserByEmail(email) {
		return await User.findOne({
			where: {email},
		});
	}
}

module.exports = new UserService();