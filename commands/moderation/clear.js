const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Eliminar mensajes')
    .addIntegerOption((option) => option.setName('cantidad').setDescription('Cantidad de mensajes a eliminar').setRequired(true).setMinValue(1).setMaxValue(99))
    .addUserOption((option) => option.setName('usuario').setDescription('seleccionar usuario')),

  async execute (interaction) {
    // Verificar si el usuario tiene permisos para gestionar mensajes
    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
      return interaction.reply({
        content: 'No tienes permiso para usar este comando.',
        ephemeral: true
      })
    }
    const cantidad = interaction.options.getInteger('cantidad')
    const user = interaction.options.getUser('usuario')
    const mensajes = await interaction.channel.messages.fetch()
    if (user) {
      let i = 0
      const mensajesAEliminar = []
      mensajes.forEach((m) => {
        if (m.author.id === user.id && i < cantidad) {
          mensajesAEliminar.push(m)
          i++
        }
      })

      interaction.channel.bulkDelete(mensajesAEliminar, true).then((m) => { interaction.reply({ content: `Se han eliminado ${m.size} de ${user.tag}`, ephemeral: true }) })
    } else {
      if (cantidad === 1) interaction.channel.bulkDelete(cantidad, true).then((m) => { interaction.reply({ content: `Se han eliminado ${m.size} mensaje`, ephemeral: true }) })
      else interaction.channel.bulkDelete(cantidad, true).then((m) => { interaction.reply({ content: `Se han eliminado ${m.size} mensaje`, ephemeral: true }) })
    }
  }
}
