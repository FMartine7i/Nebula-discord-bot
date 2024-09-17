const { EmbedBuilder } = require('discord.js')
const byeGifs = require('./byeList.json')
module.exports = {
  name: 'bye',
  async execute (message, args) {
    const colors = [
      '#6416c9',
      '#ab12e3',
      '#1251e3',
      '#12b6e3',
      '#27e38b'
    ]
    const embed = new EmbedBuilder()
      .setDescription(`${message.author} se despide!`)
      .setImage(byeGifs[Math.floor(Math.random() * byeGifs.length)])
      .setColor(colors[Math.floor(Math.random() * colors.length)])
      .setTimestamp()
    await message.delete()
    await message.channel.send({ embeds: [embed] })
  }
}
