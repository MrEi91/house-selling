'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('../config/db')

let houseSchema = new Schema({
  title: String,
  address: {
    type: String,
    required: true
  },
  square_feet: Number,
  num_bedrooms: Number,
  num_baths: Number,
  num_floor: Number,
  cost: Number,
  sold: Boolean,
  slug: String,
  img: String,
  latitude: Number,
  longitude: Number
}, {
  timestamps: true
})

let house = mongoose.model('house', houseSchema)

module.exports = house
