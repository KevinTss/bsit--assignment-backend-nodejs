'use strict'

require('dotenv').config({
  path: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
})
const express = require('express')
const cors = require('cors')

const router = require('./routes')
const errorController = require('./controllers/error')
const championController = require('./controllers/champion')

const app = express()

app.use(cors())
championController.hydrateDB()

router(app)

app.use(errorController.send404)

module.exports = app
