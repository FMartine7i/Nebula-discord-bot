const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const memes = require('./meme.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Spawnear un meme random'),
  async execute (interaction) {
    const color = [
      '#9403fc',
      '#6a11a6',
      '#7923cf',
      '#712aeb',
      '#663ff2'
    ]

    const embed = new EmbedBuilder()
      .setTitle('Por supuesto! Acá tenés un memazo!')
      .setImage(memes[Math.floor(Math.random() * memes.length)])
      .setColor(color[Math.floor(Math.random() * color.length)])
      .setTimestamp()
    await interaction.reply({ embeds: [embed] })
  }
}
