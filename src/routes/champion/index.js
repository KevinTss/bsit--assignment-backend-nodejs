'use strict'

const championRouter = require('express').Router()

const championController = require('../../controllers/champion')

championRouter.get('/', championController.get)

module.exports = championRouter
