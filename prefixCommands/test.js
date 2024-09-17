module.exports = {
  name: 'test',
  /**
     *
     * @param { Message } message
     */
  async execute (message, args) {
    message.channel.send({ content: 'Prueba superada con éxito!' })
  }
}
