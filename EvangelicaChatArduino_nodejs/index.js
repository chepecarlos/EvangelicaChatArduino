const TelegramBot = require('node-telegram-bot-api');

const token = '566023719:AAFi_IvULUvxd9CCIT5Ax9HjWhI1dd4GuLc';
var idChar = 30085334;

var serialport = require("serialport");
var miSerial = new serialport("/dev/ttyUSB0", {
  baudRate: 9600,
  autoOpen: true
});

const bot = new TelegramBot(token, {
  polling: true,
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log("El id es " + chatId)
  var respuesta = msg.text;
  if (respuesta == "encender") {
    console.log("encender led");
    bot.sendMessage(chatId, 'Encendiendo led');
    miSerial.write("H");
  } else if (respuesta == "apagar") {
    console.log("apagar led");
    bot.sendMessage(chatId, 'Apagando led');
    miSerial.write("L");
  }
});

miSerial.setEncoding('utf8');

miSerial.on('data', function(data) {
  console.log('Data:', data);
  if (data[0] == 'H') {
    console.log("Boton precionado");
    bot.sendMessage(idChar, "Precionador el boton");
  }
});
