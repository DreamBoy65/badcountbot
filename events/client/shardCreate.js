const Discord = require("discord.js");
const moment = require("moment");
const timestamp = `[${moment().format("DD-MM-YY H:m:s")}]:`;

module.exports = (client, shard) => {
 client.channels.cache.get(client.config.logs?.debug).send(`${timestamp} | Shard - ${shard.id} launched!`);
};