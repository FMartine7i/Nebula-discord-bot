const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const punchGifs = require('./punch.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('punch')
    .setDescription('Pegar a alguien')
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
        .setTitle(`ᇂ_ᇂ ${interaction.member.displayName} le ha pegado a ${member.displayName}!`)
        .setImage(punchGifs[Math.floor(Math.random() * punchGifs.length)])
        .setColor(color[Math.floor(Math.random() * color.length)])
        .setTimestamp()
      await interaction.reply({ content: `${user}`, embeds: [embed] })
    } else {
      interaction.reply({ content: 'Debes seleccionar un usuario', ephemeral: true })
    }
  }
}
