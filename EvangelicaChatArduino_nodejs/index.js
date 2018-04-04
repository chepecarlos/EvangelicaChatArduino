const TelegramBot = require('node-telegram-bot-api');

const token = '566023719:AAFi_IvULUvxd9CCIT5Ax9HjWhI1dd4GuLc';

const bot = new TelegramBot(token, {
  polling: true
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  var respuesta = msg.text;
  if (respuesta == "encender") {
    console.log("encender led");
    bot.sendMessage(chatId, 'Encendiendo led');
  } else if (respuesta == "apagar") {
    console.log("apagar led");
    bot.sendMessage(chatId, 'Apagando led');
  }

});
