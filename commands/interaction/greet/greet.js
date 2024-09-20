const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const arrivalGifs = require('./arrivalList.json')
const greetGifs = require('./greetList.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('greet')
    .setDescription('Saluda a todos o a un usuario en particular')
    .addUserOption((option) => option.setName('usuario').setDescription('seleccionar usuario')),
  async execute (interaction) {
    const user = interaction.options.getUser('usuario')
    const color = [
      '#9403fc',
      '#6a11a6',
      '#7923cf',
      '#712aeb',
      '#663ff2'
    ]
    if (user) {
      const member = interaction.guild.members.cache.get(user.id)
      const embed = new EmbedBuilder()
        .setTitle(`${interaction.member.displayName} saluda a ${member.displayName}`)
        .setImage(greetGifs[Math.floor(Math.random() * greetGifs.length)])
        .setColor(color[Math.floor(Math.random() * color.length)])
        .setTimestamp()
      await interaction.reply({ content: `${user}`, embeds: [embed] })
    } else {
      const embed = new EmbedBuilder()
        .setTitle(`${interaction.member.displayName} entra épicamente al chat`)
        .setImage(arrivalGifs[Math.floor(Math.random() * arrivalGifs.length)])
        .setColor(color[Math.floor(Math.random() * color.length)])
        .setTimestamp()
      await interaction.reply({ embeds: [embed] })
    }
  }
}
