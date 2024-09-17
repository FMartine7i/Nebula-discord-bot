const { EmbedBuilder } = require('discord.js')
const crazyGifs = require('./crazyList.json')
module.exports = {
  name: 'crazy',
  async execute (message, args) {
    const colors = [
      '#6416c9',
      '#ab12e3',
      '#1251e3',
      '#12b6e3',
      '#27e38b'
    ]
    const embed = new EmbedBuilder()
      .setDescription(`ᇂ_ᇂ ${message.author} se ha vuelto loco!`)
      .setImage(crazyGifs[Math.floor(Math.random() * crazyGifs.length)])
      .setColor(colors[Math.floor(Math.random() * colors.length)])
      .setTimestamp()
    await message.delete()
    await message.channel.send({ embeds: [embed] })
  }
}
