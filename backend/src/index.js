require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db");
const router = require("./routes");
const path = require("path");
const bot = require("./bot");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use("/api", router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync({force: false});


		app.listen(process.env.PORT, () => {
			console.log(`Server app listening at http://localhost:${process.env.PORT}`);
		});
	} catch (e) {
		console.log(e);
	}

	bot.on("message", async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;
		
		try {
			if (text === "/start") {
				await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp");

				return bot.sendMessage(chatId, "Привет! Тут будут появляться заказы для тебя!");
			}
		} catch (e) {
			return bot.sendMessage(chatId, "Произошла какая то ошибочка");
		}
	});
};

start();
