module.exports = {
  name: 'messageCreate',
  once: false,
  async execute (message, client) {
    if (message.author.bot) return

    if (message.content === 'Hola, Nebula') await message.channel.send('Hola! Soy el bot asistente de 808 Empire')
    if (message.mentions.has(message.client.user)) {
      const query = message.content.replace('<@{message.client.user.id}>', '').trim()

      if (query) {
        try {
          const response = await message.client.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: query }]
          })
          await message.channel.send(response.choices[0].message.content)
        } catch (err) {
          console.error('Error al acceder a la clave OpenAI\n', err)
          await message.channel.send('Error al procesar la solicitud.')
        }
      }
      return
    }
    const prefix = 'n?'
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()
    const cmd = client.prefixes.get(command) || client.prefixes.find(cmd => cmd.aliases && cmd.aliases.includes(command))
    if (!cmd) return message.channel.send('Ese comando no existe.')
    cmd.execute(message, args)
  }
}
