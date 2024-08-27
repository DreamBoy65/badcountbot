const { BaseInteraction, EmbedBuilder } = require("discord.js");

BaseInteraction.prototype.sendE = function (string, options = {}) {
  const embed = new EmbedBuilder()
    .setAuthor({
      name: this.user.username,
      iconURL: this.user.displayAvatarURL(),
    })
    .setColor("#000000")
    .setFooter({
      text: `\©${new Date().getFullYear()} ${this.client.user.username}`,
    })
    .setTimestamp();
    
  if(string) {
    embed.setDescription(string)
  }

  if (options.title) {
    embed.setTitle(options.title);
  }
  if (options.thumbnail) {
    embed.setThumbnail(options.thumbnail);
  }
  if (options.image) {
    embed.setImage(options.image);
  }

  if (options.fields) {
    embed.addFields(options.fields);
  }

  if (options.edit) {
    this.edit({ embeds: [embed] });
  } else {
    this.followUp({
      embeds: [embed],
      components: options.row ? [options.row] : [],
      ephemeral: options.ephemeral || true
    });
  }
};
