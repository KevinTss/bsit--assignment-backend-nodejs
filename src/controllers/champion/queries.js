'use strict'

const axios = require('axios')

const Champion = require('../../models/champion')

module.exports = {
  getAll() {
    return axios.get(process.env.DATASET_URL)
  },
  save(data) {
    return Champion.createMany(data)
  },
  readAll() {
    return Champion.read()
  },
}
