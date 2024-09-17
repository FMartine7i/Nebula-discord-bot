const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays a list of available commands.'),

  execute (interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Available Commands')
      .setDescription('```Hola, soy el asistente oficial de 808 Empire. Mi nombre es Nebula y mi objetivo es facilitarte tareas como escuchar música, enviar gifs, responder dudas, entre otros!\nDebajo dejaré mi lista de comandos:```\n↪ **n?greet <usuario>**: envía un gif para saludar a un usuario\n\n**↪ n?ce {"title": "título", "description": "descripción"}**: escribe el mensaje que quieras y se enviará en un embed.\n\n')
      .setColor('#8a22e6')
      .setTimestamp()
    interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
  }
}
