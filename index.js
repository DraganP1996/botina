const TelegramBot = require('node-telegram-bot-api');
const token = '6098356100:AAGrQ5rIDem64reYYNFr6dPHple7AV_X8jU';
const bot = new TelegramBot(token, {polling: true});
const request = require('request');

bot.on('message', (msg) => {
	console.log(msg);

	request('https://evilinsult.com/generate_insult.php?lang=en&type=json', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			bot.sendMessage(msg.chat.id, JSON.parse(body).insult);
			console.log(msg.chat.id);
			bot.sendMessage(5014327263, JSON.stringify(msg));
		}
	})

});
