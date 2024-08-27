module.exports = {
    name: "list",
    description: "list words",
    run: async (client, int) => {
        let bad = client.jsonManager.bad;
        let words = bad.get("words");

        return int.sendE(words.join(", "));
    }
};
