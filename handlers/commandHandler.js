async function loadCommands (client) {
  const { loadFiles } = require('../functions/fileLoader')
  const Ascii = require('ascii-table')
  const table = new Ascii().setHeading('Commands', 'Status')

  await client.commands.clear()
  const commandsArr = []
  const files = await loadFiles('commands')

  files.forEach(file => {
    const command = require(file)
    client.commands.set(command.data.name, command)
    commandsArr.push(command.data.toJSON())
    table.addRow(command.data.name, '✅')
  })

  client.application.commands.set(commandsArr)
  return console.log(table.toString(), '\nCommands loaded')
}

module.exports = { loadCommands }
