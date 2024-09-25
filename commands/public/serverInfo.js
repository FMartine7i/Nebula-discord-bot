const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Show server info'),
  async execute (interaction) {
    const { guild } = interaction
    const { name, members, memberCount, ownerId, createdTimestamp, nsfwLevel, description, channels, roles } = guild
    const iconURL = guild.iconURL() || null
    const bannerURL = guild.bannerURL({ size: 1024 }) || null
    const botCount = members.cache.filter((member) => member.user.bot).size
    const getChannelTypeSize = (type) => channels.cache.filter((channel) => type.includes(channel.type)).size
    const totalChannelTypeSize = getChannelTypeSize([
      ChannelType.GuildText,
      ChannelType.GuildVoice,
      ChannelType.GuildCategory,
      ChannelType.GuildPublicThread,
      ChannelType.GuildPrivateThread,
      ChannelType.GuildStageVoice,
      ChannelType.GuildForum,
      ChannelType.GuildNews,
      ChannelType.GuildNewsThread
    ])
    const embed = new EmbedBuilder()
      .setColor('#7553e6')
      .setImage(bannerURL)
      .setAuthor({ name: name || 'Unknown Server', iconURL })
      .setThumbnail(iconURL)
      .addFields(
        { name: 'Owner', value: `<@${ownerId}>`, inline: true },
        { name: 'Member count', value: `${memberCount - botCount}` || 'N/A', inline: true },
        { name: 'Bots count', value: `${botCount}` || 'N/A', inline: true },
        { name: 'Created', value: `<t:${parseInt(createdTimestamp / 1000)}:R>`, inline: true },
        { name: 'NSFW level', value: nsfwLevel || 'N/A', inline: true },
        { name: 'Server boosts', value: `${guild.premiumSubscriptionCount}` || 'N/A', inline: true },
        { name: 'Description', value: description || 'No description available', inline: true },
        {
          name: 'Channels',
          value: [
            `Total: ${totalChannelTypeSize}`,
            `Text: ${getChannelTypeSize([ChannelType.GuildText, ChannelType.GuildForum, ChannelType.GuildNews])}`,
            `Voice: ${getChannelTypeSize([ChannelType.GuildVoice, ChannelType.GuildStageVoice])}`,
            `Threads: ${getChannelTypeSize([ChannelType.GuildPublicThread, ChannelType.GuildPrivateThread, ChannelType.GuildNewsThread])}`,
            `Categories: ${getChannelTypeSize([ChannelType.GuildCategory])}`].join('\n'),
          inline: true
        },
        { name: 'Roles', value: `${roles.cache.size}`, inline: true }
      )
      .setFooter({ text: `ID: ${guild.id}` })
      .setTimestamp()
    await interaction.reply({ embeds: [embed] })
  }
}
