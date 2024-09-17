const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: 'ce',
  aliases: ['customEmbed'],
  async execute (message, args) {
    try {
      const jsonInput = args.join(' ')
      const embedData = JSON.parse(jsonInput)

      if (!embedData.title || !embedData.description) {
        return message.channel.send('Invalid JSON input. Please provide a valid JSON object with title, description, and color properties.')
      }
      await message.delete()
      const embed = new EmbedBuilder()
        .setTitle(embedData.title)
        .setDescription(embedData.description)
        .setColor(embedData.color || '#9420fa')
        .setTimestamp()

      await message.channel.send({ embeds: [embed] })
    } catch (err) {
      console.error('Se ha producido un error al procesar JSON', err)
      message.channel.send('Hubo un error al procesar el comando. Asegúrate de que el JSON esté bien formado.')
    }
  }
}
