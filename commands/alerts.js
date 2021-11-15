const axios = require("axios");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("alerts")
    .setDescription("Turns on gas alerts for the channel")
    .addStringOption((option) =>
      option
        .setName("switch")
        .setDescription("turn alerts on or off")
        .setRequired(true)
        .addChoice("ON", "on")
        .addChoice("OFF", "off")
    ),
  async execute(interaction) {
    // Make a request for a user with a given ID
    try {
      const result = await axios.get(
        `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=DU1W9IM4I88Q1YMJ4PRT2CI6F1B5ZH1QCE`
      );
      console.log(result);
      const msg = result.data.result.SafeGasPrice + " GWEI";
      await interaction.reply(msg);
    } catch (e) {
      console.log(e);
    }
  },
};
