module.exports = async client => {
    client.log.log("Im Ready as " + client.user.username);
    client.slashCommandManager.registerCommands();
};
