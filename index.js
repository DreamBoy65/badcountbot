const { Client } = require(`@shadowgarden/djs-framebot`);
const config = require("./config");
const client = new Client(config);
const extenders = require("./misc/extends");
global.client = client;

client.start();

// process error
void ["unhandledRejection", "uncaughtException"].forEach((e) => {
  process.on(e, (error, args) => {
    client.log.error(e.name + "\n" + error.stack);
  });
});
