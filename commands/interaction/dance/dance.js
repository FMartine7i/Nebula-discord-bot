const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const danceGifs = require('./dance.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dance')
    .setDescription('Ponerse a bailar'),
  async execute (interaction) {
    const color = [
      '#9403fc',
      '#6a11a6',
      '#7923cf',
      '#712aeb',
      '#663ff2'
    ]

    const embed = new EmbedBuilder()
      .setTitle(`Salgan del server que ${interaction.member.displayName} empezó a tirar los prohibidos!`)
      .setImage(danceGifs[Math.floor(Math.random() * danceGifs.length)])
      .setColor(color[Math.floor(Math.random() * color.length)])
      .setTimestamp()
    await interaction.reply({ embeds: [embed] })
  }
}
