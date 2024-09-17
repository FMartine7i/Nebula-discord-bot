async function loadPrefixes (client) {
  const { loadFiles } = require('../functions/fileLoader')
  const Ascii = require('ascii-table')
  const table = new Ascii().setHeading('Commands', 'Status')

  await client.prefixes.clear()
  const files = await loadFiles('prefixCommands')

  files.forEach((file) => {
    const prefixes = require(file)
    client.prefixes.set(prefixes.name, prefixes)

    table.addRow(prefixes.name, '✅')
  })
  return console.log(table.toString(), '\nPrefixes loaded')
}

module.exports = { loadPrefixes }
