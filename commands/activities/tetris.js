const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tetris')
    .setDescription('Juega a Tetris'),
  async execute (interaction) {
    /* const board = []
    const rows = 18
    const columns = 10
    const emptySquare = ':black_large_square:'
    const blueSquare = ':blue_square:'
    const orangeSquare = ':orange_square:'
    const yellowSquare = ':yellow_square:'
    const greenSquare = ':green_square:'
    const purpleSquare = ':purple_square:'
    const redSquare = ':red_square:'
    const brownSquare = ':brown_square:'
    let points = 0
    let lines = 0
    let downPressed = false
    const rotateShape = () => {

    } */

    await interaction.reply({ content: 'https://tetris.com/play-tetris', ephemeral: true })
  }
}
