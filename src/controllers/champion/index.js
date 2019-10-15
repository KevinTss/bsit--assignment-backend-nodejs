'use strict'

const championQueries = require('./queries.js')

module.exports = {
  /**
   * hydrateDB
   *
   * This function fetch the dataset to simulate a database
   */
  hydrateDB: async () => {
    try {
      const champions = await championQueries.getAll()
      championQueries.save(champions.data)
    } catch (error) {
      console.log(error)
    }
  },

  /**
   * get
   *
   * This is the main champion controller, it is responsible of returning the correct
   * piece of data
   */
  get: (req, res) => {
    try {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)

      const startIndex = (page - 1) * limit
      const endIndex = page * limit

      const champions = championQueries.readAll()
      const paginateChampions = champions.slice(startIndex, endIndex)

      let previous
      if (startIndex > 0) {
        previous = {
          page: page - 1,
          limit,
        }
      } else {
        previous = null
      }

      let next
      if (endIndex < champions.length) {
        next = {
          page: page + 1,
          limit,
        }
      } else {
        next = null
      }

      res.status(200).json({
        total_count: champions.length,
        total_page: Math.ceil(champions.length / limit),
        data: paginateChampions,
        previous,
        next,
      })
    } catch (error) {
      res.status(500).json({
        public_message: 'Champions not found',
        debug_message: error.message,
      })
    }
  },
}
