'use strict'

const champions = []

module.exports = class Champion {
  constructor() {}

  static createMany(data) {
    data.forEach(element => {
      champions.push(element)
    })
  }

  static read() {
    return champions
  }
}
