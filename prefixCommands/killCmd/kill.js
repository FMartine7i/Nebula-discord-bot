const { EmbedBuilder } = require('discord.js')
const killGifs = require('./killList.json')
module.exports = {
  name: 'kill',
  async execute (message, args) {
    if (message.mentions.users.size === 0) return message.channel.send('Debes mencionar a un usuario para saludarlo.')
    const mentionedUser = message.mentions.users.first()
    const colors = [
      '#6416c9',
      '#ab12e3',
      '#1251e3',
      '#12b6e3',
      '#27e38b'
    ]
    const embed = new EmbedBuilder()
      .setDescription(`(◡︵◡) ${message.author} ha matado a ${mentionedUser}!`)
      .setImage(killGifs[Math.floor(Math.random() * killGifs.length)])
      .setColor(colors[Math.floor(Math.random() * colors.length)])
      .setTimestamp()
    await message.delete()
    await message.channel.send({ embeds: [embed] })
  }
}
