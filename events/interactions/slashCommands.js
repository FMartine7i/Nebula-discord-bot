module.exports = {
  name: 'interactionCreate',
  /**
     *
     * @param { ChatInputCommandInteraction } interaction
     */
  execute (interaction, client) {
    if (!interaction.isChatInputCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) {
      return interaction.reply({
        content: 'This command is outdated.',
        ephemeral: true
      })
    }

    if (command.developer && command.developer === true && interaction.user.id !== '852655351630528532') {
      return interaction.reply({
        content: 'Command developer only.',
        ephemeral: true
      })
    }

    command.execute(interaction, client)
  }
}
