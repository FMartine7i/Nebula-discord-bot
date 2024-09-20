const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const pixelGifs = require('./pixelList.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pixelart')
    .setDescription('Enviar imagen Pixel Art'),
  async execute (interaction) {
    const color = [
      '#9403fc',
      '#6a11a6',
      '#7923cf',
      '#712aeb',
      '#663ff2'
    ]
    const embed = new EmbedBuilder()
      .setTitle('Pixel Art')
      .setDescription('imagen ``pixel art`` para distender')
      .setImage(pixelGifs[Math.floor(Math.random() * pixelGifs.length)])
      .setColor(color[Math.floor(Math.random() * color.length)])
      .setTimestamp()
    await interaction.reply({ embeds: [embed] })
  }
}
