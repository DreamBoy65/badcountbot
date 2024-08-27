module.exports = {
    name: "leaderboard",
    description: "leaderboard",
    run: async (client, int) => {
        let User = client.mongoManager.User;

        let users = await User.find();

        users = users.sort((a, b) => b.count - a.count).slice(0, 10);

        int.sendE(
            users
                .map((e, i = 1) => {
                    return `**${i+1}** • ${int.guild.members.cache
                        .get(e._id)
                        ?.toString()} - **${e.count}**`;
                })
                .join("\n")
        );
    }
};
