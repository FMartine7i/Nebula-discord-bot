require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits
const { User, Message, GuildMember, ThreadMember } = Partials

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

client.events = new Collection()
loadEvents(client)

client
    .login(token)