module.exports = {
    name: "word",
    description: "create or delete word",
    options: [
        {
            type: "String",
            name: "word",
            description: "word...",
            required: true
        }
    ],
    run: async (client, int) => {
        let word = int.options.getString("word");
        let bad = client.jsonManager.bad;
        let words = bad.get("words");

        if (words.find(c => c === word)) {
            bad.remove("words", word);
            return int.sendE("Removed");
        } else {
          bad.push("words", word)
          return int.sendE('Added')
        }
    }
};
