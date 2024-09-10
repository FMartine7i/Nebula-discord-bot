module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot) return

        if (message.content === 'Hola, Nebula') await message.channel.send('Hola! Soy el bot asistente de 808 Empire')
    },
}