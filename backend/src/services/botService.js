const bot = require("../bot");

const {CHAT_ID} = process.env;

class BotService {
	async sendMessage(message) {
		await bot.sendMessage(CHAT_ID, message);
	}
}

module.exports = new BotService();

