require('dotenv').config()
const { ActivityType } = require('discord.js')
const { loadCommands } = require('../../handlers/commandHandler')
const { loadPrefixes } = require('../../handlers/prefixHandler')

module.exports = {
  name: 'ready',
  once: true,
  async execute (client) {
    console.log('Nebula is online!')
    client.user.setActivity('con el código', { type: ActivityType.Playing })
    loadCommands(client)
    loadPrefixes(client)
  }
}
