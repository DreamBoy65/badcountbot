module.exports = async (client, message) => {
    const User = client.mongoManager.User;
    const { content, author } = message;
    if (author.bot) return;
    let bad = client.jsonManager.bad;
    let words = bad.get("words");

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

    words.forEach(e => {
        if (content.includes(e)) {
            user.count += 1;
        }
    });

    await user.save();
};
