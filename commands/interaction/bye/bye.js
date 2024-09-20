const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const byeGifs = require('./byeList.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bye')
    .setDescription('Depedirse del chat'),
  async execute (interaction) {
    const color = [
      '#9403fc',
      '#6a11a6',
      '#7923cf',
      '#712aeb',
      '#663ff2'
    ]

    const embed = new EmbedBuilder()
      .setTitle(`${interaction.member.displayName} se va épicamente del chat`)
      .setImage(byeGifs[Math.floor(Math.random() * byeGifs.length)])
      .setColor(color[Math.floor(Math.random() * color.length)])
      .setTimestamp()
    await interaction.reply({ embeds: [embed] })
  }
}
