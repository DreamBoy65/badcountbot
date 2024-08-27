module.exports = {
    name: "Dream",
    bot: {
        token: "",
        intents: ["Guilds", "GuildMessages", "MessageContent"]
    },

    owners: ["1204376012138356746"],

    events: {
        dir: "events",
        subDirs: ["client", "guild"],
        dirs: true,
        showLogs: false
    },

    slashCommand: {
        dir: "commands",
        parentCommands: [],
        showLogs: true,
        loadGlobal: true,
        enable: true,
        autoHandle: true
    },

    textCommand: {
        enable: false
    },

    mongoDB: {
        enable: true,
        uri: "mongodb+srv://dream:yesdream001@cluster0.fkvuvdn.mongodb.net/badbot",
        models: ["User"],
        modelDir: "model"
    },

    jsonDB: {
        enable: true,
        dir: "databases",
        dbs: ["bad"],
        autoLoad: true
    }
};
