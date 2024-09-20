const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Información del usuario')
    .addUserOption((option) => option.setName('usuario').setDescription('seleccionar usuario')),
  async execute (interaction) {
    const user = interaction.options.getUser('usuario') || interaction.user
    const member = interaction.guild.members.cache.get(user.id)
    const embed = new EmbedBuilder()
      .setColor('#9420fa')
      .setAuthor({ name: user.username, iconURL: `${user.avatarURL({ dynamic: true })}` })
      .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
      .setImage(user.bannerURL({ size: 512 }))
      .setTitle(`Información de ${user.username}`)
      .addFields(
        { name: 'Info general', value: `**ID:** ${user.id}"` },
        { name: 'Account created', value: `<t:${parseInt(user.createdTimestamp / 1000)}:R>` },
        { name: 'Joined server', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:R>` },
        { name: 'Roles', value: `${member.roles.cache.map(r => r).join(' ').replace('@everyone', '') || 'Doesn\'t have any roles'}` },
        { name: 'Status', value: `**Estado:** ${user.presence?.status || 'Has no active status, is invisible/offline or is not in the bot cache'}` },
        { name: 'Banner', value: user.bannerURL({ dynamic: true }) ? '** **' : 'Este usuario no tiene banner' }
      )
    await interaction.reply({ embeds: [embed] })
  }
}
