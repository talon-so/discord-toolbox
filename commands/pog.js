const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pog")
    .setDescription("Replies with CHAMP"),
  async execute(interaction) {
    await interaction.reply("CHAMP");
  },
};
