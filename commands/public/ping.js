const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),

  /**
     *
     * @param { ChatInputCommandInteraction } interaction
     */

  execute (interaction) {
    console.log('pong')
    interaction.reply({
      content: 'Pong!',
      ephemeral: false
    })
  }
}
