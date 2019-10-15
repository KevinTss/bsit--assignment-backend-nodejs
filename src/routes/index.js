'use strict'

const championRouter = require('./champion')

module.exports = app => {
  app.use('/ping', (req, res) => res.send('pong'))
  app.use('/champions', championRouter)
}
