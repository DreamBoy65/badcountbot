module.exports = {
    name: "count",
    description: "bad count of user",
    options: [
        {
            type: "User",
            name: "user",
            description: "user",
            required: false
        }
    ],
    run: async (client, int) => {
        let author = int.options.getUser("user") ?? int.user;

        let User = client.mongoManager.User;

        let user = await User.findOne({
            _id: author.id
        });
        if (!user) {
            user = await new User({
                _id: author.id
            }).save();
            user = await User.findOne({
                _id: author.id
            });
        }

        int.sendE(`${author.displayName}'s bad is **${user.count}**`);
    }
};
