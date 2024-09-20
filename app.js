require('dotenv').config()
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits
const { User, Message, GuildMember, ThreadMember } = Partials
const { OpenAI } = require('openai')

const client = new Client({
  intents: [
    Guilds,
    GuildMembers,
    GuildMessages,
    MessageContent
  ],
  partials: [User, Message, GuildMember, ThreadMember]
})

const { loadEvents } = require('./handlers/eventHandler')
const token = process.env.TOKEN
const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY
})

client.openai = openai
client.events = new Collection()
client.commands = new Collection()
client.prefixes = new Collection()

loadEvents(client)

require('./handlers/antiCrash')(client)

client
  .login(token)
